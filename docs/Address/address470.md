# Fog of War Masks

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x657AA0 | 210383 | 1.16.1 | 1 | 4096 | Backed By Code |

# Description

Sets the brightness parts of the fog of war masks. Corresponds to dark.pcx indexes, with valid values from 0 (black) to 31 (full brightness). Values >31 in 1.16.1 are glitched colors.<br><br>4 bytes at 0x00657AA0 correspond to unexplored fog.<br>4 bytes at 0x0065825C correspond to explored areas in fog.<br>4 bytes at 0x00658A9C correspond to visible areas.<br>Other addresses relate to the transitions between these areas.<br><br>Setting to 0x1F1F1F1F will fully clear the mask, though units and buildings may not be visible or selectable depending on the actual fog state. Additionally, using different values for each byte, e.g. 0x1F001F00, will create vertical stripes (tested in 1.16.1).