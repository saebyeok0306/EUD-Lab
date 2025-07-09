# Unitnode Table

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x59CCA8 | 19025 | 1.16.1 | 336 | 1700 | Backed By Code |

# Description

[SCR: See individual entries]<br><br>See Unitnode Structure in the Reference page or https://github.com/bwapi/bwapi/blob/master/bwapi/BWAPI/Source/BW/CUnit.h<br><br>Units are loaded to index 0 then 1699, 1698, 1697... (this includes pre-placed map units)<br><br>Compute the memory location of an index using:<br>0x0059CCA8 + (0x150 * index)<br><br>Example:<br>Index 1699 is at 0x00628298 = 0x0059CCA8 + (0x150 * 0x6A3)  (player 161,741)<br>where 0x0059CCA8 is the base address, 0x150 = 336 is the size and 0x6A3 = 1699 is the unit index<br><br>Index 1698 is at 0x00628148 = 0x0059CCA8 + (0x150 * 0x6A2)<br>Index 1697 is at 0x00627FF8 = 0x0059CCA8 + (0x150 * 0x6A1)<br>Index 1696 is at 0x00627EA8 = 0x0059CCA8 + (0x150 * 0x6A0)<br>etc. (difference between each index is the size, 336 = 0x150)