# StoryLark Gallery

The open library of **themes** and **presentation templates** for
[StoryLark](https://github.com/StoryLark/storylark), served at
[gallery.storylark.dev](https://gallery.storylark.dev).

- **Theme** — a `brand.json` + `theme.css` token pair: colors, fonts, the read-along highlight.
- **Presentation template** — the screens and flow a story library is presented with.

## Submit yours

Open a pull request adding your entry to [`public/registry.json`](public/registry.json) with a
link to your source repo. Themes must follow the token contract, templates the screen contract —
see the [docs](https://storylark.org/docs). Once merged, it appears on the site.

## How it deploys

Push to `main` → GitHub Actions → Cloudflare Pages project `storylark-gallery` → gallery.storylark.dev.
