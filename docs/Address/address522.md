# Units.dat - Has Shields

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x6647B0 | 223507 | 1.16.1 | 1 | 228 | Simple Data |

# Description

Example: Unset "has shields" for Protoss Observatory<br><br>Base Address = 0x006647B0<br>Protoss Observatory Units.dat Index = 159 = 0x9F<br><br>0x006647B0 + 0x9F = 0x0066484F<br><br>0x0066484F is not divisible by 4, next lowest multiple of 4 = 0x0066484C<br>Went down by 3 bytes to reach the multiple of 4<br><br>Therefore, modify 0xFF00000 at 0x0066484C to change value at 0x0066484F<br><br>// set observatory "has shields" to 0<br>Masked MemoryAddr(0x0066484C, Set To, 0, 0xFF000000);