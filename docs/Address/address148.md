# Death Table Start

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x58A364 |  | 1.16.1 | 48 | 228 | Simple Data |

# Description

Counts per player, per unit<br><br>First entry in the death table (P1 marine) for 1.16.1.<br><br>Structured like<br>P1 marine<br>P2 marine<br>...<br>P12 marine<br>P1 ghost<br>P2 ghost<br>...<br>P12 ghost<br>...<br>...<br><br>For each unit, 4 bytes per player, for 12 players.<br><br>offset + (unit*12 + player) * sizeof(u32)