# Yee Hauls — Twilio A2P 10DLC Submission (copy-paste reference)

Your number (480) 876-5030 is a local 10-digit number, so this is **A2P 10DLC**
(not Toll-Free). You register a **Brand**, then a **Campaign**, in the Twilio Console
under Messaging → Regulatory Compliance.

Use the real `https://yeehauls.com/...` URLs once the domain cutover is done. Until
then the live opt-in page is `https://yeehauls.marcocorella.workers.dev/contact/`.

---

## 1. Brand registration (business profile / TrustHub)

| Field | Value |
|---|---|
| Legal business name | Yee Hauls LLC |
| Business type | Limited Liability Company (LLC) |
| EIN (Tax ID) | [YOUR EIN] |
| Business registration country | United States |
| Business address | [YOUR REGISTERED BUSINESS ADDRESS] |
| Website | https://yeehauls.com |
| Business email | info@yeehauls.com |
| Business phone | +1 480 876 5030 |
| Industry / vertical | Construction / Home & Professional Services |
| Brand relationship | Basic / Small business |

Notes:
- As an EIN-registered LLC, register as a **Standard Brand** (not Sole Proprietor).
- The legal name, address, and EIN must match your IRS/state records exactly, or the
  brand vetting fails.

---

## 2. Campaign registration

**Use case:** Customer Care (or "Low Volume Mixed" if Customer Care isn't offered for
your volume). This is transactional/conversational, which vets more easily than marketing.

**Campaign description:**
> Yee Hauls sends customer-care text messages to people who request a dump trailer
> rental quote on our website. Messages relate to that customer's own quote and job:
> quote follow-ups, scheduling, delivery and pickup confirmations, and status updates.
> We do not send promotional or marketing blasts.

**How do end users consent (opt-in flow):**
> Customers opt in on our website by submitting the quote request form at
> https://yeehauls.com/contact/ and checking an optional, unchecked consent box.
> Consent is not required to submit the form or to receive service. The checkbox reads:
>
> "By checking this box, you agree to receive text messages from Yee Hauls about your
> quote and service, such as scheduling and updates. Message frequency varies. Msg &
> data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a
> condition of purchase. See our Privacy Policy and Terms."
>
> Our Privacy Policy (https://yeehauls.com/privacy/) states that mobile information and
> text messaging opt-in consent are never shared with or sold to third parties or lead
> generators. Messaging terms are at https://yeehauls.com/terms/.

**Message frequency:** Varies; typically 1–5 messages per quote or job.

**Opt-in / Opt-out / Help fields:**
- Opt-in keyword(s): n/a (opt-in is via the website form, not a keyword)
- Opt-out keyword: STOP
- Help keyword: HELP
- Embedded links in messages: No (or Yes if you ever text a booking link)
- Embedded phone numbers: Yes (your own number for callbacks)
- Age-gated content: No

**Sample messages (provide 2–5; these match the consent):**
1. "Yee Hauls: Thanks for your request! We can drop your 6x10 dump trailer Thu 6/26
   between 8-10am. Reply YES to confirm. Reply STOP to opt out."
2. "Yee Hauls: You're confirmed for Thu 6/26, 8-10am at [address]. $250 covers the
   first ton + 48 hrs. Questions? Call (480) 876-5030. Reply STOP to opt out."
3. "Yee Hauls: Your trailer is on the way and should arrive within the hour. Reply STOP
   to opt out."
4. "Yee Hauls: All done — we picked up your trailer and handled the dump run. Thanks for
   choosing us! Reply STOP to opt out."

**Auto-reply messages to configure:**
- HELP reply:
  > "Yee Hauls: For help, call (480) 876-5030 or email info@yeehauls.com. Msg & data
  > rates may apply. Reply STOP to opt out."
- STOP / opt-out reply:
  > "You are unsubscribed from Yee Hauls texts and will receive no more messages. Reply
  > HELP for help."

---

## 3. Screenshot to attach

A screenshot of https://yeehauls.com/contact/ showing the quote form with the unchecked
SMS consent checkbox and its full disclosure text visible.

---

## 4. Checklist before submitting
- [ ] Domain cutover done so opt-in URL is yeehauls.com (recommended) — or use the
      workers.dev URL
- [ ] EIN + legal name + address match IRS/state records exactly
- [ ] Privacy Policy URL live and contains the "never shared/sold" SMS line ✅ (it does)
- [ ] Terms URL live with SMS terms ✅ (it does)
- [ ] STOP and HELP auto-replies configured on the messaging service
- [ ] Sample messages match the use case (transactional, include brand + STOP)
