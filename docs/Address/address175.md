# Location Table

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x58DC60 | 3647 | 1.16.1 | 20 | 255 | Simple Data |

# Description

+0x00 (EPD 3647)<br><br>	This is the LEFT position of the location (X1).<br><br>+0x04 (EPD 3648)<br><br>	This is the TOP position of the location (Y1).<br><br>+0x08 (EPD 3649)<br><br>	This is the RIGHT position of the location (X2).<br><br>+0x0C (EPD 3650)<br><br>	This is the BOTTOM position of the location (Y2).<br><br>+0x10 (EPD 3651)<br><br>String ID:<br>	1) Look in the String Editor of the Map Editor you're using<br>	2) Find the name of the location within it<br>	3) Now count all the strings that are above it, and add 1 to the total number.<br>	4) The number you came to is the String ID for that location<br><br>Flags (Affect Layers):<br>	Low Ground: 65536<br>	Med Ground: 131072<br>	High Ground: 262144<br>	Low Air: 524288<br>	Med Air: 1048576<br>	High Air: 2097152<br><br>When all flags are enabled, the value<br>of the address is: 4128768 + String ID<br><br>When all flags are disabled, the value<br>of the address is: String ID<br><br>Note: the 64th (1-based) location is "Anywhere."