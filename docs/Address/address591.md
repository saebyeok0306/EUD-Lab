# Creep Tile Backup Buffer

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x6D0C68 | 334401 | 1.16.1 | 4 | 1 | Unsupported |

# Description

Pointer to the u16 buffer that stores the tile IDs of tiles overwritten by creep in the Active Map Tile buffer. Values are normally 0 until a creep tile replaces them.