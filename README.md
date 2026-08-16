# StoryLark Gallery

The open library of **themes** and **presentation examples** for
[StoryLark](https://github.com/StoryLark/storylark), served at
[gallery.storylark.dev](https://gallery.storylark.dev).

- **Theme** — a `brand.json` + `theme.css` token pair (colors, fonts, the read-along highlight),
  installable on a live deployment as a `.storylark-theme.zip` package via the admin portal or
  `npm run import-theme` — no rebuild required. See
  [`build-your-own-theme.md`](https://github.com/StoryLark/storylark/blob/main/docs/build-your-own-theme.md#theme-packages--building-installing-rolling-back).
- **Presentation example** — a `presentation.json` showing one way to arrange the screens, nav,
  and copy a story library is presented with. This is **not yet its own installable package
  type** — today a `presentation.json` either rides along inside a theme package as an optional
  file, or is copied by hand into `presentation/<your-id>/`. Independent
  `storylark-template-*` packages are a planned future format, not something you can import yet.
  See [`build-your-own-presentation.md`](https://github.com/StoryLark/storylark/blob/main/docs/build-your-own-presentation.md).

## Submit yours

See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the full process and review criteria. Short
version: fork, add one entry to [`public/registry.json`](public/registry.json), open a PR.
`main` is protected — every item lands by reviewed PR, merged by the maintainer, and appears on
the site automatically.

## How it deploys

Push to `main` → GitHub Actions → Cloudflare Pages project `storylark-gallery` → gallery.storylark.dev.
