# Void theme

Void is the default interface theme for this build of Stash: a true-black
(OLED) canvas, the bundled Inter typeface and a single blue accent.

## Where things live

| What | File |
| --- | --- |
| Design tokens (every colour, radius, font) | `ui/v2.5/src/styles/_tokens.scss` |
| Bootstrap configuration and base components | `ui/v2.5/src/styles/_theme.scss` |
| Bundled Inter font (SIL OFL 1.1) | `ui/v2.5/src/styles/_fonts.scss`, `ui/v2.5/src/styles/fonts/inter/` |
| Navigation bar, tag chips, rating pill, selects | `ui/v2.5/src/index.scss` |
| Grid cards (all card types) | `ui/v2.5/src/components/Shared/GridCard/styles.scss` |
| Scene cards and the scene page | `ui/v2.5/src/components/Scenes/styles.scss` |
| Video player | `ui/v2.5/src/components/ScenePlayer/styles.scss` |
| Filter sidebar | `ui/v2.5/src/components/Shared/styles.scss` |
| Login page (served separately) | `ui/login/login.css` |

## Changing the look

Change values in `_tokens.scss` rather than in component stylesheets. The most
useful ones:

- `$void-bg` — page background. `#000` switches OLED pixels off; `#050505`
  avoids the faint smear some OLED panels show when scrolling over pure black.
- `$void-accent` — the one accent colour (active tab, stars, progress, primary
  buttons). Text on accent backgrounds is `$void-on-accent` (black).
- `$void-radius` — corner rounding for thumbnails and controls.

Older stylesheet variables (`$text-color`, `$secondary`, `$card-bg`, …) still
exist and point at Void tokens, so existing component styles keep working.

## Behaviour changes that came with the theme

- The filter sidebar on list pages is shown by default on wide screens. Hiding
  it is remembered per page, as before.
- Card ratings show as a small star pill instead of a coloured diagonal
  ribbon. The `rating-*` classes are still emitted for custom CSS.
- Scene card descriptions are limited to two lines.
- The browser/PWA theme colour defaults to black. Config files that still hold
  the old default (`#202b33`) are treated as black too.
