# StoryLark Gallery

The open library of **themes** and **presentation templates** for
[StoryLark](https://github.com/StoryLark/storylark), served at
[gallery.storylark.dev](https://gallery.storylark.dev).

- **Theme** — a `brand.json` + `theme.css` token pair: colors, fonts, the read-along highlight.
- **Presentation template** — the screens and flow a story library is presented with.

## Submit yours

See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the full process and review criteria. Short
version: fork, add one entry to [`public/registry.json`](public/registry.json), open a PR.
`main` is protected — every item lands by reviewed PR, merged by the maintainer, and appears on
the site automatically.

## How it deploys

Push to `main` → GitHub Actions → Cloudflare Pages project `storylark-gallery` → gallery.storylark.dev.
