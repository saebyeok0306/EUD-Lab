# Game Brightness

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x657A9C | 210382 | 1.16.1 | 4 | 1 | Simple Data |

# Description

Darkens the screen without affecting UI elements. Appears to be a modifier for Fog of War Masks? Technically a 1 byte value, but the high bytes are padding and not used.<br><br>Valid values are 0-31, with 0 being black and 31 being maximum brightness. Values >31 appear to just be black.<br><br>The value appears to be the index in tileset\*\dark.pcx remapping palette.