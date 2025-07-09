# Sprite Table

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x629D98 | 163469 | 1.16.1 | 36 | 2500 | Read Only |

# Description

[SCR: See individual entries]<br><br>Difference between each entry: 9 Player ID's<br><br>Struct:<br>https://github.com/bwapi/bwapi/blob/master/bwapi/BWAPI/Source/BW/CSprite.h<br><br>Populates like CUnit, with 2nd entry at the rearmost of the table, and the 3rd the 2nd rearmost entry of the table; first entry will be a cursour sprite, having sprite ID of 318.