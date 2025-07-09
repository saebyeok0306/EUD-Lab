# #'s of Game Pauses

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x58D718 | 3309 | 1.16.1 | 1 | 8 | Simple Data |

# Description

The base value of this address is: (P1 + P2 + P3 + P4) * 3 = 50529027<br><br>Player 1: *1<br>Player 2: *256<br>Player 3: *65536<br>Player 4: *16777216<br><br>Player 1, 2, 3, and 4 all have three remaining game pauses that they can use to stop the game from running temporarily. If Player 2 were to pause the game, and have only two remaining game pauses left as a result, the new value of the address is: 50529027 - 256 = 50528771.<br><br>The same as EPD 3310, except:<br><br>Player 5: *1<br>Player 6: *256<br>Player 7: *65536<br>Player 8: *16777216<br><br>Challenge (Try it) - Create a easy formula from all of the information given.