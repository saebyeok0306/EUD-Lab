# Force Flags

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x58D5B8 | 3221 | 1.16.1 | 1 | 4 | Simple Data |

# Description

4 bytes: 1 byte for each force specifying the flags;<br>	force 1: 0x0058D5B8<br>	force 2: 0x0058D5B9 bits*256<br>	force 3: 0x0058D5BA bits*65536<br>	force 4: 0x0058D5BB bits*16777216<br><br>7 bits: 1 bit per flag per force;<br>	bit 0: randomize location (+1 to byte)<br>	bit 1: ally (+2 to byte)<br>	bit 2: allied victory (+4 to byte)<br>	bit 3: shared vision (+8 to byte)<br>	bit 4: unknown/unused (+16 to byte)<br>	bit 5: unknown/unused (+32 to byte)<br>	bit 6: unknown/unused (+64 to byte)<br>	bit 7: unknown/unused (+128 to byte)<br><br>EPD 3221: read not one byte, but all four bytes<br>and 12 bits<br><br>FORCE FLAGS<br>force names<br>player's force