// Worker entry for the Cloudflare Workers "static assets" deploy.
// Static pages are served from ./dist via the ASSETS binding.
// The only dynamic route is POST /api/quote (the website lead form).
//
// Lead routing is controlled entirely by environment variables, so we move from
// "email now" to "n8n / CRM later" without changing the form or this file:
//
//   LEAD_WEBHOOK_URL   If set, the lead is POSTed as JSON here (point at the n8n
//                      webhook on the Hostinger VPS for Phase 2 -> CRM/SMS/etc).
//   RESEND_API_KEY     If set (with LEAD_EMAIL_TO + LEAD_EMAIL_FROM), the lead is
//                      emailed via Resend for Phase 1 "email to info@yeehauls.com".
//   LEAD_EMAIL_TO      e.g. info@yeehauls.com
//   LEAD_EMAIL_FROM    a verified Resend sender, e.g. quotes@yeehauls.com
//
// Set these in the Worker's Settings -> Variables before launch.

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  LEAD_WEBHOOK_URL?: string;
  LEAD_WEBHOOK_SECRET?: string; // shared secret sent as x-webhook-secret; n8n verifies it
  RESEND_API_KEY?: string;
  LEAD_EMAIL_TO?: string;
  LEAD_EMAIL_FROM?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/quote') {
      if (request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 });
      }
      return handleQuote(request, env);
    }

    // Everything else: serve the static site.
    return env.ASSETS.fetch(request);
  },
};

async function handleQuote(request: Request, env: Env): Promise<Response> {
  const thanks = new URL('/thanks/', request.url).toString();

  let data: Record<string, string> = {};
  try {
    const form = await request.formData();
    for (const [k, v] of form.entries()) data[k] = String(v);
  } catch {
    return new Response('Bad request', { status: 400 });
  }

  // Honeypot + minimal validation
  if (data._gotcha) return Response.redirect(thanks, 303);
  if (!data.name || !data.phone) {
    return new Response('Name and phone are required.', { status: 422 });
  }

  const lead = {
    name: data.name,
    phone: data.phone,
    email: data.email || '',
    city: data.city || '',
    message: data.message || '',
    smsConsent: data.sms_consent === 'yes',
    source: data._source || '/',
    site: 'yeehauls.com',
    receivedAt: new Date().toISOString(),
  };

  const tasks: Promise<unknown>[] = [];

  // Phase 2 path: forward to n8n (or any webhook) for CRM/SMS/automation.
  if (env.LEAD_WEBHOOK_URL) {
    const headers: Record<string, string> = { 'content-type': 'application/json' };
    if (env.LEAD_WEBHOOK_SECRET) headers['x-webhook-secret'] = env.LEAD_WEBHOOK_SECRET;
    tasks.push(
      fetch(env.LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(lead),
      })
    );
  }

  // Phase 1 path: email the lead via Resend.
  if (env.RESEND_API_KEY && env.LEAD_EMAIL_TO && env.LEAD_EMAIL_FROM) {
    const text = [
      'New quote request from yeehauls.com',
      '',
      `Name:  ${lead.name}`,
      `Phone: ${lead.phone}`,
      `Email: ${lead.email}`,
      `City:  ${lead.city}`,
      `SMS OK: ${lead.smsConsent ? 'yes' : 'no'}`,
      `Page:  ${lead.source}`,
      '',
      'Message:',
      lead.message || '(none)',
    ].join('\n');

    tasks.push(
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          authorization: `Bearer ${env.RESEND_API_KEY}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          from: env.LEAD_EMAIL_FROM,
          to: env.LEAD_EMAIL_TO,
          reply_to: lead.email || undefined,
          subject: `New quote: ${lead.name} (${lead.city || 'East Valley'})`,
          text,
        }),
      })
    );
  }

  if (tasks.length === 0) {
    console.error('worker: no LEAD_WEBHOOK_URL or RESEND_* configured; lead not delivered', lead);
  } else {
    try {
      await Promise.all(tasks);
    } catch (err) {
      console.error('worker: lead delivery failed', err);
    }
  }

  return Response.redirect(thanks, 303);
}
