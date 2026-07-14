# Contributing to the StoryLark Gallery

Thanks for building something for StoryLark! This is the process for getting a **theme** or a
**presentation template** listed in the gallery at [gallery.storylark.dev](https://gallery.storylark.dev).

## How submission works

1. **Fork this repo** and create a branch.
2. **Add your entry to [`public/registry.json`](public/registry.json)** under `themes` or
   `templates` (schema below).
3. **Optionally include the package itself** under `themes/<your-id>/` (a `brand.json` +
   `theme.css` pair) so people can use it straight from this repo. Otherwise link a public
   source repo of your own.
4. **Open a pull request.** One item per PR, please.
5. A maintainer reviews it. Direct pushes to `main` are disabled — everything lands by
   reviewed PR, merged by the maintainer. Once merged, your item appears on the site
   automatically.

## Registry entry schema

### Theme

```json
{
  "id": "kebab-case-unique-id",
  "name": "Display Name",
  "author": "You or your project",
  "description": "One or two sentences: the mood, the key colors, what makes it distinct.",
  "swatches": ["#hex", "#hex", "#hex", "#hex"],
  "fonts": "Display face · Body face",
  "source": "https://github.com/you/your-theme (or a themes/<id> path in this repo)",
  "install": "One sentence: how someone uses it."
}
```

### Presentation template

Same shape, with `screens: ["Screen", "Screen", …]` instead of `swatches`/`fonts`.

## What we check before merging

- **Themes:** the full token contract is present in `theme.css` (`--bg`, `--bg-raised`,
  `--bg-sunken`, `--text`, `--text-muted`, `--text-faint`, `--accent`, `--accent-strong`,
  `--rule`, `--link`, the four `--font-*` faces, `--highlight-word`, `--highlight-block`),
  with **both light and dark** modes defined. `brand.json` must not contain secrets, push
  keys, or live infrastructure origins — use `example.com` placeholders.
- **Templates:** the screen contract is honored and the source is public and buildable.
- **Rights:** you own or are licensed to use the name, artwork, and branding you submit.
  Submissions are accepted under the repo's **Apache-2.0** license.
- **Content:** family-friendly — StoryLark is a storybook reader.

## Questions

Open an issue, or start from the [docs](https://storylark.org/docs).
