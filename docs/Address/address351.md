# CUnit - Acid Spore 1/9

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x59CDCF | 19098 | 1.16.1 | 1 | 1 | See Description |

# Description

[SCR: Other acid spore timers are NOT supported and give EUD errors on access]<br><br>Timer for 1st of 9 acid spores applied to a unit (*16777216)<br><br>Initialised to 150 (2,516,582,400). Timers decay 1 tick per 8 frames, so 150 / 2.9762 = 50.4 RL seconds on Fastest.<br><br>This is the timer for the first acid spore that hits a target, you can reduce the value and the spore will decay quickly as expected.<br><br>When a 2nd spore is applied that timer is recorded separately and independently. The first spore will decay as per its timer and the 2nd one decays based on its timer.