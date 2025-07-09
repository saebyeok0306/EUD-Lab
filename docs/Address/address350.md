# CUnit - Acid Spore Count

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x59CDCE | 19098 | 1.16.1 | 1 | 1 | Supported |

# Description

The amount of Acid Spores applied to a unit (*65536).<br><br>This value is incremented when a spore timer becomes non-0, and decremented when a spore timer becomes 0. It represents the extra damage (+1) and weapon cooldown (+12.5% per spore) inflicted on the current unit, and controls which overlay graphic to display and the green "Acid Spore (x)" rank string.<br><br>Artificially decrementing this value can result in an underflow wrap-around to 255 if a spore timer subsequently decrements to 0. Unfortunately the code to remove the graphical overlay is tied to the last spore timer decrementing to 0, so simply setting this value back to 0 does not remove the graphical overlay. The best approach is to detect if the value is at least 10, then set the value to 1 and set sporeTimer[1] to 1, so that when it decrements the graphical overlay will be removed.