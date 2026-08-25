# Content authoring guide — A-Game Sports rebuild

You are writing content pages for the A-Game Sports rebuild (Astro + Tailwind, in this directory). Every page is one Markdown file under `src/content/pages/`, whose file path mirrors its live URL.

## Before you write anything

1. **Crawl the real source page** at the matching URL on `https://agamesports.net` (WebFetch) to get real facts: ages, prices, session lengths, schedule, what's included, what to bring. Also skim the parent hub page and `https://agamesports.net/policies/` if a fact is missing.
2. **Never invent a fact** — no price, age range, staff name, or certification that isn't on the live site. If the live page doesn't say, write around it honestly: "Call **(914) 278-9477** to confirm current pricing" rather than a made-up number. This is a hard requirement from the client brief.
3. Reuse verified facility facts from `src/data/facility.ts` (address, phone, email, hours, founded 2013, mission line) rather than re-deriving them.

## File path → URL mapping

A file at `src/content/pages/soccer-programs/soccer-1-on-1-lessons.md` becomes `/soccer-programs/soccer-1-on-1-lessons/`. A hub page (the first URL in a sitemap group) is `index.md` inside its own folder, e.g. `src/content/pages/soccer-programs/index.md` → `/soccer-programs/`.

**Your exact file paths must match the `href` values assigned to you below, letter for letter** (including trailing structure) — the router and the nav/breadcrumb/related-links system in `src/data/sitemap.ts` depend on exact matches.

## Frontmatter schema (all fields; see `src/content.config.ts`)

```yaml
---
title: string                 # short page title, used in <title> and cards
template: hub | program | camp | info | legal
navGroup: string              # copy the "group" name from sitemap.ts exactly, e.g. "Baseball"
sport: string                 # optional, e.g. "Baseball" — omit for non-sport pages
description: string           # 1 sentence, meta description, ~150 chars
ageRange: string               # optional — only if the source page states one
priceNote: string              # optional — only if the source page states pricing
scheduleNote: string           # optional — days/times if stated
facts:                         # optional array of extra facts for the sidebar
  - label: string
    value: string
ctaLabel: string                # defaults to "Book a Tour" — override e.g. "Reserve a Week"
ctaHref: string                  # defaults to "/contact/"
heroEyebrow: string              # optional small line above the headline
heroHeadline: string             # REQUIRED — the big hero line, fresh copy, not a copy-paste of the old title
heroSub: string                  # optional supporting sentence
heroImage: string                 # optional — path to a photo co-located next to this .md file, e.g. ./hero.jpg
heroImageAlt: string               # required whenever heroImage is set — describe what's actually in the photo
order: number                    # just use 1
---

Markdown body here — the full rewritten page copy.
```

## Adding a hero photo

No pages ship with photos yet, but the pipeline is ready. To add one: drop a real photo of the facility, a coach, or a program in action (jpg/png/webp — never stock photography or anything that misrepresents the business) in the same folder as the page's `.md` file, then set both `heroImage: ./filename.jpg` and a descriptive `heroImageAlt` in frontmatter. Astro's `astro:assets` pipeline (wired into `Hero.astro` via `src/content.config.ts`'s `image()` schema helper) automatically optimizes it to WebP and switches the hero to a two-column layout. Omit both fields — the current default — and the hero renders exactly as it does today, no image.

## Which template for which page

- **`hub`** — the first URL in a sitemap group (a sport landing page, or a category hub like Summer Camps, Academics, Birthdays & Events). Renders hero + prose + an auto-generated grid linking every sibling page in the group. Keep body copy focused on *helping a parent choose* which child page to click — don't just restate what the children say.
- **`program`** — a single lesson/training page nested under a sport (1-on-1 lessons, small group, team training, travel team, fall/seasonal variant). Renders hero + prose + a facts sidebar (ages/schedule/price) + related links to siblings.
- **`camp`** — a single camp page under Summer Camps or School Break Camps. Same layout as `program`, use for anything camp-shaped (has dates/what-to-bring).
- **`info`** — standalone pages with no sibling detail pages to list, or pages that are reference/informational rather than a bookable program: About/Facility/Staff/Press/Now-Hiring, Travel Teams overview, Customized Programs, Calendar, Specials, Blog index.
- **`legal`** — already built (Policies, Release Forms, Privacy Policy, Terms). You won't need this template.

## Voice and tone (from the client brief — hold all three at once)

- **Exciting**: kids look forward to this place. Energy without empty hype or clichés ("state-of-the-art," "premier destination").
- **Compassionate**: written for a parent who wants their kid safe, included, and having fun. Name that stake directly, especially near policies/safety/forms.
- **Serious about the business**: hours, pricing, registration steps, and policies read as precise and dependable even while warm. A page that's fun but vague about price or age range fails.

Full rewrite, not a light edit of the old site's copy — the old copy is a floor, not a ceiling. Every fact must still check out against the live source.

## Cross-linking

You don't need to hand-build "related pages" grids — `HubTemplate` and `DetailTemplate` generate those automatically from `src/data/sitemap.ts`, matched by URL. Just write natural inline markdown links (`[Small Group Lessons](/soccer-programs/soccer-small-group-lessons/)`) where it helps the reader, using exact hrefs from `src/data/sitemap.ts`.

## What NOT to touch

Only add new `.md` files under `src/content/pages/`. Don't edit components, layouts, `sitemap.ts`, `facility.ts`, or existing pages unless you find a factual error in already-published content (in which case, fix it and note what you changed).

## Reference examples already built (read these before writing your first page)

- `src/content/pages/baseball-programs/index.md` (`hub`)
- `src/content/pages/baseball-programs/baseball-1-on-1-lessons.md` (`program`)
- `src/content/pages/summer-camps/summer-baseball-softball-camp.md` (`camp`)
- `src/content/pages/about-a-game-sports/index.md` (`info`)

## When you're done

Do **not** run `npm run build` or `npm run dev` — other agents are writing content in parallel and a shared build would race. Just double-check each file's frontmatter is valid YAML matching the schema above (correct field names, `template` is one of the 5 allowed values, `heroHeadline` present). List every file you created in your final report, plus any fact you couldn't verify from the live site and had to write around.
