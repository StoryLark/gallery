# Repo intent — gallery

**The open library of StoryLark themes and presentation examples — gallery.storylark.dev.**

## What this repo is

Two kinds of shareable content for the StoryLark engine:

- **Theme** — a `brand.json` + `theme.css` token pair (colors, fonts, the read-along
  highlight), installable on a live StoryLark deployment as a `.storylark-theme.zip`
  package via the admin portal or `npm run import-theme` — no rebuild required.
- **Presentation example** — a `presentation.json` showing one way to arrange the
  screens, nav, and copy a story library is presented with. **Not yet its own
  installable package type** — today it either rides inside a theme package as an
  optional file, or is copied by hand into `presentation/<your-id>/`. Independent
  `storylark-template-*` packages are a planned future format, not importable yet.

## How it relates to other repos

- Built for **`StoryLark/storylark`** — themes here are consumed by any StoryLark
  deployment (e.g. `storylark-gunner`, `storylark-holdfast` reference this gallery's
  tooling when evolving their own themes)

## Status

Active, open for community theme/presentation submissions.
