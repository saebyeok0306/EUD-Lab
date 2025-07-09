# Active Player Structures

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x57EEE0 | -11553 | 1.16.1 | 36 | 12 | Backed By Code |

# Description

A structure for each player containing their HumanID, StormID, Type, Race, Team, and Name.<br>+0x00 = HumanID (4 bytes)<br>+0x04 = StormID (4 bytes)<br>+0x08 = Type (1 byte; 0 = inactive, 1 = computer, 2 = human, 3 = rescuable, 7 = neutral)<br>+0x09 = Race (1 byte; 0 = zerg, 1 = terran, 2 = protoss)<br>+0x0A = Team (1 byte)<br>+0x0B = Name (25 bytes)