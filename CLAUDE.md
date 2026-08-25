## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## STANDING MANDATE — BUILD AND LINK-CHECK BEFORE ANY CONTENT/NAV CHANGE IS DONE

This repo is a static Astro site with no test suite (no `*.test.*`, no test runner in
`package.json`) — the fleet's mutation-testing mandate (revert a fix, confirm a test fails,
restore, confirm it passes) has nothing to bite on here. This is the closest honest equivalent
for a site with no application logic: a broken build or a broken link is this repo's version of
a failing test, and it needs the same discipline — verify before calling something done, not
just eyeball the diff.

**Before considering any change to navigation, internal links, or page structure finished, run:**

```
npm run verify
```

This runs `astro build` (`dist/`), then `linkinator` against the real built output — not the
live `agamesports.net` domain, and not a guess about what the site contains. It resolves the
site's own absolute URLs (`https://agamesports.net/...`) back against the local `dist/` build via
`--url-rewrite-search`/`--url-rewrite-replace`, so a real broken internal link fails the check
with a real `[404]`, not a false-positive network error, and a genuinely broken link can't hide
behind "well it's an absolute URL so the checker skipped it."

**Verified real, not just described**: mutation-tested this check itself before writing this
mandate down — deliberately broke a real link in `Nav.astro` (`/contact` → a nonexistent path),
confirmed `npm run verify` caught it (`ERROR: Detected 96 broken links`, exit code `1`, since the
broken nav link is repeated across every one of the 95 built pages), restored the file, confirmed
it passes clean again (`✓ Successfully scanned 99 links`). The check has real teeth, not just a
green checkmark that would pass regardless of what's actually broken.

`check-links` (just the linkinator half, if `dist/` is already fresh) and `verify` (build +
check-links together — the one to actually run) are both in `package.json`.

Social links (`facebook.com`, `instagram.com`, `twitter.com`) are skipped from the live check —
they're outside this repo's control and checking them adds network flakiness without catching
anything this repo could fix. Everything else — every internal page, every asset, every external
link this site actually authors — is checked for real.

This mandate mirrors the fleet-wide standing mandate on mutation-testing every review finding
(see `The-Reaver/The-Geo-Suite-`'s `CLAUDE.md`): the shared principle is "prove the check catches
a real break before trusting it," adapted here to a repo where the honest unit of verification is
a link, not a test assertion.
