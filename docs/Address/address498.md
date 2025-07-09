# Units.dat - Building Dimensions

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x662860 | 221503 | 1.16.1 | 4 | 228 | Simple Data |

# Description

Struct:<br>2 bytes - Width<br>2 bytes - Height<br><br>Setting to 0 will make the unit (not just buildings) invisible:<br>- It won't appear on the minimap<br>- It won't appear on the main map<br>- It can't be selected by the mouse in any way<br>- 'Bring' triggers will not locate it<br>- Units can still attack (and will display missile graphics)<br>- Units still cause and are affected by collision<br>- Units can't be targetted by other units<br><br>This dimension is used when determining if units with the Building flag can fit in the available spaace. Units without the Building flag will rely on their collision dimensions instead.<br><br>Setting this to a size of 31x31 or smaller will allow buildings to be built on any terrain, including water and cliffs, although the placement mechanics are a little wonky.