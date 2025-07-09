# Mission Objectives Index

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x58D6C4 | 3288 | 1.16.1 | 4 | 12 | Simple Data |

# Description

EPD 3288 (+0x00):<br><br>This is the Mission Objective String ID for Player 1.<br><br>To find the String ID for a Mission Objective:<br><br>	1) Look at Player 1's Mission Objective text.<br>	2) Go into the String Editor of the Map Editor you're using.<br>	3) Find the exact string used in Player 1's Mission Objective text 		within the String Editor.<br>	4) Now count all of the string above it, and add 1 to the total 	number.<br><br>Note: This does not work if Player 1 does not have any text in his Mission Objective. In fact, the value of the address would be 0.<br><br>EPD 3289 (+0x04): This is the Mission Objective String ID for Player 2.<br>EPD 3290 (+0x08): This is the Mission Objective String ID for Player 3.<br>EPD 3291 (+0x0C): This is the Mission Objective String ID for Player 4.<br>EPD 3292 (+0x10): This is the Mission Objective String ID for Player 5.<br>etc