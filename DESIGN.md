# Design spec

The widget is a small Swiss-style poster: one strict layout, black ink on a paper color that changes each day, and a fine paper grain.

Mockups: `mockups/widget-graphic-design.html` (final direction) and `mockups/texture-experiments.html` (textures considered).

## Layout

Medium widget, designed at 338 × 158 pt and checked at 364 × 170 pt.

| Element | Spec |
|---|---|
| Widget | Padding 12 top and bottom, 16 left and right. One column, full width. No side column |
| Top rule | 1 pt rule across the top of the column |
| Korean word | Fills the remaining height and is sized each day to fit the full column width, bottom-aligned just above the caption row |
| Caption row | Romanization on the left, translation on the right, 1 pt rule on top, 3 pt vertical padding |
| Example row | Example sentence, 1 pt rules on top and bottom, 3 pt vertical padding |

The weekday and date are not shown. The daily paper color marks each new day.

## Type

| Element | Font | Size | Line height |
|---|---|---|---|
| Korean word | Apple SD Gothic Neo Heavy, -5.5% letter spacing | Fitted to width, 62 at minimum for 4 syllables | 100% |
| Romanization | Helvetica Neue Bold | 13 | 16 |
| Translation | Helvetica Neue Regular | 13 | 16 |
| Example sentence | Apple SD Gothic Neo Regular | 13 | 16 |

Example sentences must fit on one line, about 20 to 23 Korean characters at most.

## Color

All text and rules use ink `#14110F`.

| Day | Paper | Hex | Contrast with ink |
|---|---|---|---:|
| Monday | Hot red | `#FF3B57` | 5.4:1 |
| Tuesday | Mint | `#7CFFB0` | 15.0:1 |
| Wednesday | Violet | `#B57BFF` | 6.5:1 |
| Thursday | Lime | `#E8FF5A` | 16.9:1 |
| Friday | Electric blue | `#2F86FF` | 5.4:1 |
| Saturday | Pink | `#FFB3CB` | 11.3:1 |
| Sunday | Aqua | `#8FD9EC` | 11.9:1 |

The colors stay the same in light and dark mode.

## Texture

Fine paper grain over the paper color, under the ink: fractal noise at a base frequency of 0.9 with 2 octaves, colored with ink, at 16% opacity. Scriptable cannot generate noise, so the grain ships as 7 background images, one per paper color, generated once by a script.
