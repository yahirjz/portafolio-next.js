# Task 4 — Contact flow

## Changes

- Kept the existing `/api/contacto` endpoint and `nombre`, `email`, and `mensaje` payload fields.
- Added trimmed required-field validation, a basic email-shape check, and limits of 100 characters for `nombre`, 254 for `email`, and 5,000 for `mensaje`.
- Handles malformed JSON as HTTP 400 and converts Resend failures (including an absent API key) to a generic Spanish HTTP 500 response. Provider error details are never returned.
- Replaced browser alerts with an `idle | success | error` feedback state rendered next to the form through an `aria-live="polite"` status region. The submit button remains disabled while sending.

## Verification

- `npm run lint` completed with exit code 0.
- Invalid request returned HTTP 400 with a safe Spanish validation message.
- Malformed JSON returned HTTP 400 with a safe Spanish message.
- A valid-shaped request returned the generic HTTP 500 message because `RESEND_API_KEY` is not configured locally. No email delivery is claimed.
