# yeehauls.com — DNS cutover plan (Squarespace → Cloudflare Worker)

Captured 2026-06-23 from authoritative GoDaddy NS (ns29.domaincontrol.com).
Registrar: GoDaddy / Wild West Domains. Current DNS: GoDaddy. Email: Google Workspace.

## Goal
Point the website to the Cloudflare Worker (`yeehauls`) while keeping Google
Workspace email working perfectly. Done by moving DNS to Cloudflare and changing
nameservers at GoDaddy.

---

## A. PRESERVE EXACTLY (email + verification) — do not lose these

### MX (5 records) — Google Workspace
| Priority | Value |
|---|---|
| 1  | aspmx.l.google.com |
| 5  | alt1.aspmx.l.google.com |
| 5  | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |
| 10 | alt4.aspmx.l.google.com |

### TXT @ root
- `v=spf1 include:_spf.google.com ~all`   (SPF)
- `google-site-verification=fcXiuU_el1aZ1ITHYVQWlZQffaLLfJR6yEeJsYsBpCc`

### DKIM — TXT @ `google._domainkey`
One record (the value below is split across two strings in DNS; it is a single key):
```
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkIpR1Zb0cM6RoPvADENNEPiPrAIDXnMyl7jo2CgpGOvpDajM0uyiM4jlW3hbGfvLa9uCmnhtmNWEOJ47QWlhzF/su+Scbs67muL2f/S0JoaILApcnV9I+INszuld+PJBvzIhDSs2bMyvJA3FTpwNE5FueY2qsOeojIrc15dTSdjlRlLamWirnVMELJPGwMXFcWemWN2ID6CeIAUXR7Ui1Nz/69Pruwb/DxBvLOaOLrIDYo95Qev609TxAGKInCRYtvZ2V+1+JzUhqspffiWieLnJrp+C+ajms62mX0TJDrot7Ibsb5PjBr29ZhOY5cyrsjFotFMp8B1iLFiC0bbOiwIDAQAB
```
NOTE: Cloudflare's auto-import frequently MISSES long DKIM records. Verify this one
is present after import, or add it manually. If DKIM is wrong, Google-sent mail can
fail DMARC.

---

## B. FIX during cutover (two pre-existing problems found)

1. **Duplicate DMARC record (invalid).** `_dmarc.yeehauls.com` currently has TWO TXT
   records, which RFC treats as no DMARC at all:
   - `v=DMARC1; p=quarantine; adkim=r; aspf=r; rua=mailto:dmarc_rua@onsecureserver.net;` (GoDaddy default)
   - `v=DMARC1; p=none; rua=mailto:postmaster@yeehauls.com; ruf=mailto:postmaster@yeehauls.com; pct=100;`
   
   **Set ONE record** on Cloudflare. Recommended safe value (keeps mail flowing, reports
   to your own domain):
   ```
   v=DMARC1; p=none; rua=mailto:postmaster@yeehauls.com
   ```
   (Can tighten to `p=quarantine` later once you confirm reports look clean.)

2. **`_domainconnect` CNAME** → `_domainconnect.ss.domaincontrol.com` is a GoDaddy-only
   helper. Drop it; not needed on Cloudflare.

---

## C. REPLACE (website — currently Squarespace, will become the Worker)
- Root `A` records (198.185.159.144/145, 198.49.23.144/145) — Squarespace. Remove.
- `www` CNAME `ext-cust.squarespace.com` (+ Squarespace A) — Squarespace. Remove.
- Replace both with the Cloudflare Worker custom domain for `yeehauls.com` and
  `www.yeehauls.com` (Cloudflare creates the proxied records automatically).

---

## D. Staged, near-zero-downtime sequence
1. Add `yeehauls.com` as a site in Cloudflare (Free plan). It auto-imports DNS.
2. **Verify section A is fully present** (especially DKIM). Fix DMARC per section B.
   Leave the Squarespace A/www records in place for now.
3. Change nameservers at GoDaddy from `ns29/ns30.domaincontrol.com` to the two
   Cloudflare nameservers Cloudflare assigns. Wait for the zone to go Active
   (usually <1 hr). Site still serves from Squarespace, email still flows — nothing
   visibly changes yet.
4. Add the Worker custom domain for `yeehauls.com` + `www.yeehauls.com` (via
   `wrangler.jsonc` routes or the dashboard). This swaps the site to the new build.
5. Verify: https://yeehauls.com loads the new site, http→https, www redirects, and
   send/receive a test email to confirm Workspace is intact.
6. Remove any leftover Squarespace records.

Rollback: if anything looks wrong, switch the GoDaddy nameservers back to
ns29/ns30.domaincontrol.com (reverts everything).

---

## Who does what
- **Marco (only he has access):** add the zone in Cloudflare dashboard; change
  nameservers at GoDaddy.
- **Claude (via wrangler):** add the Worker custom domain once the zone is Active;
  verify every step with dig.
