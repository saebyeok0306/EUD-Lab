# Last Random Number

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x51CA14 | -112212 | 1.16.1 | 4 | 1 | Simple Data |

# Description

Randomization seed for the next random number, mask with 0x7FFF0000 for the last returned number.<br><br>int getRandomNumber(){<br>  lastRandomNumber = lastRandomNumber * 0x15A4E35 + 1;<br>  return (lastRandomNumber >> 16) & 0x7FFF;<br>}