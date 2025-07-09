# Player's Force

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x58D5B0 | 3219 | 1.16.1 | 1 | 8 | Simple Data |

# Description

8 bytes: 1 byte for each active player, specifying<br>which of the 4 forces (0-based) that the player's<br>on:<br>	EPD 3219<br>	Player 1: 0x0058D5B0<br>	Player 2: 0x0058D5B1 force*256<br>	Player 3: 0x0058D5B2 force*65536<br>	Player 4: 0x0058D5B3 force*16777216<br>	EPD 3220<br>	Player 5: 0x0058D5B4<br>	Player 6: 0x0058D5B5 force*256<br>	Player 7: 0x0058D5B6 force*65536<br>	Player 8: 0x0058D5B7 force*16777216<br><br>each force have a multipler value to differentiate<br>themselves from one another:<br>	Force 1<br>	Force 2 (*2 to Player)<br>	Force 3 (*3 to Player)<br>	Force 4 (*4 to Player)<br><br>force flags<br>force names<br>PLAYER'S FORCE