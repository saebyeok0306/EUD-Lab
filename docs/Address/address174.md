# Switch Table

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x58DC40 | 3639 | 1.16.1 | 32 | 1 | Simple Data |

# Description

+0x00 (EPD 3639)<br>	Switch 1: *1<br>	Switch 2: *2<br>	Switch 3: *4<br>	Switch 4: *8<br>	Switch 5: *16<br>	Switch 6: *32<br>	Switch 7: *64<br>	Switch 8: *128<br>	...<br>	Switch 32: *2147483648<br><br>When none of the switches from 1 to 32<br>are set, the value of the address is: 0<br><br>When only switch 8 is set, the value of the<br>address is: 128.<br><br>When only switch 2 and switch 8 are set,<br>the value of the address is: 2 + 128 = 130.<br><br>+0x04 (EPD 3640): Switch 33-64<br>+0x08 (EPD 3641): Switch 65-96<br>+0x0C (EPD 3642): Switch 97-128<br>+0x10 (EPD 3643): Switch 129-160<br>+0x14 (EPD 3644): Switch 161-192<br>+0x18 (EPD 3645): Switch 193-224<br>+0x1C (EPD 3646): Switch 225-256