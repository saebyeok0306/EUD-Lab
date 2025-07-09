# Units.dat - Sight Range

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x663238 | 222133 | 1.16.1 | 1 | 228 | Simple Data |

# Description

Set value from 0-11.  Values greater than 11 will crash.<br><br>Example: Setting SCV Sight Range to 5.<br><br>Base Address = 0x00663238<br>SCV Units.dat Index = 0x7<br><br>0x00663238 + 0x7 = 0X66323F<br><br>0x0066323F is not divisible by 4, next lowest multiple of 4 is 0x0066323C<br>Went down 3 bytes to get from 0x0066323F to 0x0066323C<br>Therefore, need to modify 0xFF000000 at 0x0066323C to the change value at 0x0066323F<br><br>// set SCV sight range to 5<br>Masked MemoryAddr(0x0066323C, Set To, 0x05000000, 0xFF000000);