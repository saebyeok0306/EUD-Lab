# Force Names

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x58D5BC | 3222 | 1.16.1 | 30 | 4 | Simple Data |

# Description

4 byte integers: 1 integer for each force, string<br>number of the name per force:<br>	force 1: 0x0058D5BC (EPD 3222)<br>	force 2: 0x0058D5DC (EPD 3230)<br>	force 3: 0x0058D5F8 (EPD 3237)<br>	force 4: 0x0058D614 (EPD 3244)<br><br>untested: even forces strip two characters from<br>the start of the force name<br><br>advice: use [EUD] Text to Value converter<br><br>force flags<br>FORCE NAMES<br>player's force