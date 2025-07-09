# Player Alliances

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x58D634 | 3252 | 1.16.1 | 12 | 12 | Simple Data |

# Description

EPD 3252<br>+ 0x00: P1 ally status to P1<br>+ 0x01: P1 ally status to P2 (*256).<br>+ 0x02: P1 ally status to P3 (*65536).<br>+ 0x03: P1 ally status to P4 (*16777216).<br>EPD 3253<br>+ 0x04: P1 ally status to P5.<br>+ 0x05: P1 ally status to P6 (*256).<br>+ 0x06: P1 ally status to P7 (*65536).<br>+ 0x07: P1 ally status to P8 (*16777216).<br>EPD 3254<br>P1 ally status to P9-P12.<br>EPD 3255<br>+ 0x0C: P2 ally status to P1.<br>+ 0x0D: P2 ally status to P2 (*256).<br>etc<br><br>0x00: Enemy, 0x01: Ally, 0x02: Allied Victory<br><br>Note - A player is always allied OR allied victory to themself. I could not confirm through testing if it was just one of them, but in most cases, it's allied. Otherwise assume allied victory instead.