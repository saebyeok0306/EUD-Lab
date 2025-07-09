# CUnit - Next Movement Waypoint

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x59CCC0 | 19031 | 1.16.1 | 2 | 2 | Unsupported |

# Description

0x0000FFFF x-coord<br>0xFFFF0000 y-coord<br><br>The next way point in the path the unit is following to get to its destination. Equal to moveToPos for air units since they don't need to navigate around buildings or other units. (bwapi)