# Tile Flags Pointer

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x6D1260 | 334783 | 1.16.1 | 4 | 1 | Backed By Code |

# Description

Pointer to (Map Width)x(Map Height) array of u32 flags:<br>0x000000xx - Visibility Flags -- bits correspond to each player<br>0x0000xx00 - Explored Flags -- bits correspond to each player<br>0x00010000 - Walkable<br>0x00020000 - Unused?<br>0x00040000 - Unwalkable<br>0x00080000 - Unused?<br>0x00100000 - Unused?<br>0x00200000 - Unused?<br>0x00400000 - Has Creep<br>0x00800000 - Unbuildable (i.e., water tiles)<br>0x01000000 - Low Ground<br>0x02000000 - Med Ground<br>0x04000000 - High Ground<br>0x08000000 - Occupied (i.e. contains a building)<br>0x10000000 - Creep Receeding<br>0x20000000 - Cliff Edge<br>0x40000000 - Temporary Creep<br>0x80000000 - Unused?<br><br>Taken from: https://github.com/bwapi/bwapi/blob/master/bwapi/BWAPI/Source/BW/Structures.h#L80