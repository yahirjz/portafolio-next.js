# Task 3 report: metadata and crawler basics

## Implemented

- Added Spanish root metadata with a title template, descriptive summary, OpenGraph, and Twitter card fields.
- Added per-project titles, descriptions, OpenGraph/Twitter metadata, and canonical paths when a site URL is configured.
- Added App Router `robots.ts` and `sitemap.ts` metadata routes.
- Kept Sportixa accurate as a private beta: its project page is `noindex, nofollow`, and it is excluded from the sitemap. The public TISAX case study and the portfolio home remain indexable.

## Deployment requirement

Set `NEXT_PUBLIC_SITE_URL` to the real, absolute production URL (for example, `https://portfolio.example.com`) before deployment. This enables `metadataBase`, canonical URLs, and absolute OpenGraph URLs.

No production portfolio URL is configured in this repository, so none was invented. In local development only, `robots.txt` and `sitemap.xml` use `http://localhost:3000` as their absolute URL fallback.

## Verification

- `npm run lint` completed successfully.
- `npm run dev` served `robots.txt`, `sitemap.xml`, and Sportixa metadata locally.
- Local response checks confirmed the expected robots directive, sitemap routes, Sportixa title/description, and `noindex, nofollow` directive.
- `npm run build` could not complete because the restricted environment cannot fetch Inter and Outfit from Google Fonts; the output contains no metadata/type error.
