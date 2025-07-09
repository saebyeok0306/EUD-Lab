# Completed Unit Counts Table

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x584DE4 | -5472 | 1.16.1 | 48 | 228 | Simple Data |

# Description

Counts per player, per unit<br><br>For each unit, 4 bytes per player, for 12 players.<br><br>offset + (unit*12 + player) * sizeof(u32)