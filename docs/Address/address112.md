# Player Selection Circle Colors

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x581D6A | -8575 | 1.16.1 | 1 | 12 | Simple Data |

# Description

Each byte sets the color of the selection circle:<br>000 - Green<br>001 - Yellow<br>002 - Red<br>017 - Grey Blue*<br>136 - Light Grey*<br>138 - Dark Grey*<br>Higher values can give different colors (most give solid black.) Asterisk colors are inconsistent.<br><br>p1 = -8575 with mask 0x00FF0000<br>p2 = -8575 with mask 0xFF000000<br>p3 = -8574 with mask 0x000000FF<br>p4 = -8574 with mask 0x0000FF00<br>p5 = -8574 with mask 0x00FF0000<br>p6 = -8574 with mask 0xFF000000<br>p7 = -8573 with mask 0x000000FF<br>p8 = -8573 with mask 0x0000FF00<br>p9 = -8573 with mask 0x00FF0000<br>p10 = -8573 with mask 0xFF000000<br>p11 = -8572 with mask 0x000000FF<br>p12 = -8572 with mask 0x0000FF00