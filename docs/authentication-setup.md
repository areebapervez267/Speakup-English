# Authentication setup (Supabase)

SpeakUp English uses **Supabase Auth** for student accounts. The app never
stores passwords itself: sign-up, sign-in, email confirmation, password reset
and sign-out are all handled by Supabase, and the session is kept in secure
cookies managed by `@supabase/ssr`.

This guide covers the free setup. You do not need a paid plan, a custom domain
or any payment details.

> **Current status in this workspace:** no Supabase credentials are configured.
> The auth forms show a setup notice and stay disabled until you complete the
> steps below. No account data is sent anywhere, and `/account` redirects to
> the login page. Nothing in this repository contains real keys.

---

## 1. Create a free Supabase project

1. Go to [database.new](https://database.new) and sign in.
2. Create a new project. Choose the free plan.
3. Pick a region close to you, set a database password (this is only for the
   Postgres database, not for student accounts) and wait for provisioning.
4. Free projects are paused after a period of inactivity. If the app later
   reports that it cannot reach the auth service, restore the project from the
   Supabase dashboard.

## 2. Copy the project URL and public key

In the Supabase dashboard open **Project Settings → API** (or the **Connect**
dialog):

- **Project URL** — looks like `https://abcdefghijklmno.supabase.co`
- **Publishable key** — looks like `sb_publishable_...`
- Older projects show a legacy **anon** key instead. Both are designed for
  browser use.

Do **not** copy the `service_role` or secret key into this app. It bypasses
row-level security and must never reach the browser. This project does not use
one at all.

## 3. Create `.env.local`

Copy `.env.example` to `.env.local` in the project root and fill in your values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key

# Only if your project has no publishable key:
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Optional. Public origin used for confirmation and reset links.
# Leave unset locally; set it in production.
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Rules:

- The URL must start with `http://` or `https://`.
- The publishable key takes precedence over the legacy anon key.
- Only `NEXT_PUBLIC_` variables are sent to the browser. Never put a secret or
  service-role key in one.
- `.env.local` is git-ignored. Never commit real keys, and never paste them into
  issues, screenshots or documentation.
- Restart `npm run dev` after changing environment variables.

## 4. Configure auth URLs in Supabase

Open **Authentication → URL Configuration**.

**Site URL** — the default redirect target:

- Local development: `http://localhost:3000`
- Production (later): `https://your-domain.com`

**Redirect URLs** — add the routes the app uses:

```
http://localhost:3000/auth/callback
http://localhost:3000/auth/confirm
https://your-domain.com/auth/callback
https://your-domain.com/auth/confirm
```

The app appends a `next` query parameter to the callback URL (for example
`/auth/callback?next=/reset-password`). If Supabase rejects a redirect as not
allowed, also add the wildcard patterns for local development:

```
http://localhost:3000/**
```

and, for production, `https://your-domain.com/**`. Exact URLs are safer for
production; prefer them when they work.

## 5. Choose an email link style

The app supports both Supabase email link styles.

### Option A — default templates (recommended to start)

Leave the built-in templates unchanged. Their `{{ .ConfirmationURL }}` link
goes through Supabase and then redirects to `/auth/callback`, which exchanges
the PKCE code for a session.

PKCE links must be opened in the **same browser** that started sign-up or the
password reset, because the code verifier is stored in that browser's cookie.
Opening the email on another device shows the "link expired or already used"
page. Use Option B if you need cross-device links.

### Option B — token-hash templates

Edit the email templates under **Authentication → Email Templates** so they
point at `/auth/confirm`. This route verifies the token directly and works on
any device.

Suggested markup (keep Supabase's surrounding template design if you prefer):

**Confirm signup**

```html
<a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email&next=/account">
  Confirm your email
</a>
```

**Reset password**

```html
<a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=recovery&next=/reset-password">
  Choose a new password
</a>
```

**Change email** (route supports it, but there is no change-email UI yet)

```html
<a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email_change&next=/account">
  Confirm your new email
</a>
```

`{{ .SiteURL }}` is the Site URL configured above, so it must be
`http://localhost:3000` while testing locally.

## 6. Email delivery

Supabase's built-in email service is rate-limited and intended for testing.
If confirmation or reset emails do not arrive, check spam, wait for the rate
limit to reset, and for production configure your own SMTP provider under
**Authentication → SMTP Settings**. No paid service is required for local
testing.

## 7. Verify the flows

Start the app with `npm run dev` and open `http://localhost:3000`.

1. **Navigation** — the desktop header and mobile menu show *Log in* and
   *Sign up* when signed out.
2. **Sign up** — `/signup` asks for full name, email, password and password
   confirmation. Invalid fields show inline messages and the submit button is
   disabled while the request is pending. Duplicate submits are blocked.
3. **Email confirmation** — with **Confirm email** enabled (the default under
   Authentication → Providers → Email), sign-up shows "check your email".
   Open the link to finish. If confirmation is disabled, sign-up signs you in
   immediately and redirects to `/account`.
4. **Account page** — `/account` shows your display name, email, verification
   status and member-since date. It does not show progress or statistics.
5. **Log out** — use the account menu in the header, the mobile drawer or the
   button on `/account`. All return you to a signed-out state.
6. **Protected route** — while signed out, `/account` redirects to
   `/login?next=/account`, then returns you to `/account` after signing in.
7. **Password reset** — `/forgot-password` sends a generic response whether or
   not the email exists. Open the link to reach `/reset-password`, choose a new
   password, and confirm that the success banner appears on `/account`. Other
   devices are signed out. The old password must no longer work.
8. **Expired or reused links** — `/auth/auth-code-error` explains the problem
   and links to a new reset or sign-in.
9. **Invalid redirects** — `next` values that are not local absolute paths are
   ignored and fall back to `/account`.
10. **Expired sessions** — the proxy checks verified claims for `/account` and
    `/reset-password` and sends expired sessions back to sign-in.

Server-side checks use `supabase.auth.getUser()` (verified with Supabase), not
`getSession()`. Hidden UI is never the only protection: `/account` is guarded
by both the proxy and the page itself.

## 8. What is unavailable without credentials

- Sign-up, sign-in, reset and sign-out forms are visible but disabled, with a
  notice pointing to this file.
- `/account` and `/reset-password` cannot create a session, so they redirect or
  show the setup notice.
- No accounts, profiles or passwords are stored anywhere.
- Nothing in the site claims that authentication is connected.

## 9. Scope and security notes

- Passwords are handled only by Supabase Auth; the app never stores or logs
  them.
- The only profile data kept is the display name passed as Supabase user
  metadata (`full_name`) plus the email Supabase requires. No extra personal
  information is collected.
- Auth pages are marked `noindex` and responses carrying sessions are sent with
  `Cache-Control: private, no-store`.
- Sign-out uses local scope; password changes additionally sign out other
  devices.
- Not implemented in this phase: OAuth/social login, magic-link buttons,
  profile editing, avatar upload, payments, and deployment.
- Lesson progress and quiz-score storage are implemented in Phase 5, but they
  need the database migrations to be applied. See
  [progress-database-setup.md](./progress-database-setup.md).

## 10. Troubleshooting

| Symptom | Likely cause |
| --- | --- |
| Forms show the setup notice | `.env.local` missing, URL/key invalid, or the dev server was not restarted |
| "We couldn't reach the authentication service" | Project paused, wrong URL, or offline |
| Confirmation link opens an error page | Link already used/expired, PKCE link opened in a different browser, or `/auth/callback` is missing from Redirect URLs |
| Reset email never arrives | Built-in email rate limit, spam filtering, or missing SMTP configuration |
| Redirected to `/login?error=reset-session` from `/reset-password` | The reset link was not exchanged first, or the reset session expired |
| Sign-in says email is not confirmed | Open the confirmation email, or disable **Confirm email** for local experiments |
| Signed out immediately in production | `NEXT_PUBLIC_SITE_URL` or cookie settings mismatch; make sure the app is served over HTTPS |

Never "fix" an auth error by disabling verification, weakening passwords or
adding a service-role key to client code.
