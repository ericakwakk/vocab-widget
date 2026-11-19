# Design spec

The widget is a small Swiss-style poster: one strict layout, black ink, and a new paper color each day.

## Layout

Medium widget, designed at 338 × 158 pt and checked at 364 × 170 pt.

| Element | Spec |
|---|---|
| Widget | Horizontal layout, padding 12 top and bottom, 16 left and right, gap 10 |
| Main column | Fills the remaining width, 1 pt rule on top |
| Korean word | Fills the remaining height |
| Caption row | Romanization on the left, translation on the right, 1 pt rule on top, 3 pt vertical padding |
| Example row | Example sentence, 1 pt rules on top and bottom, 3 pt vertical padding |
| Side column | 26 pt wide, 1 pt rule on the left, weekday stacked at the top, date at the bottom |

## Type

| Element | Font | Size |
|---|---|---|
| Korean word | Apple SD Gothic Neo Heavy, -5.5% letter spacing | 62 |
| Romanization | Helvetica Neue Bold | 11 |
| Translation | Helvetica Neue Regular | 11 |
| Example sentence | Apple SD Gothic Neo Regular | 11 |
| Weekday | Apple SD Gothic Neo Heavy | 15 |
| Date | Helvetica Neue Bold | 10 |

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
