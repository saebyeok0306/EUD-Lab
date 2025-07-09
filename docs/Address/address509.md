# Units.dat - Group Flags

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x6637A0 | 222479 | 1.16.1 | 1 | 228 | Simple Data |

# Description

0x01 - Zerg (Uses underlings, can build on creep)<br>0x02 - Terran (Uses Supply, has sublabel, buildings will burn)<br>0x04 - Protoss (Uses Psi)<br>0x08 - Men<br>0x10 - Building<br>0x20 - Factory<br>0x40 - Independent<br>0x80 - Neutral<br><br>Example:<br>Set Protoss Observatory as Terran and Unset Protoss so it will burn and can be repaired.<br>Protoss Observatory Units.dat Index = 159 = 0x9F<br>0x006637A0 + 0x9F = 0x0066383F<br>0x0066383F is not divisible by 4, next lowest multiple of 4 = 0x0066383C<br>Therefore, modify 0xFF00000 at 0x0066383C to hit 0x0066383F<br>// set Protoss Observatory Terran<br>MemoryAddr(0x0066383C, Add, 0x02000000);<br>// unset Protoss Observatory Protoss<br>MemoryAddr(0x0066383C, Subtract, 0x04000000);