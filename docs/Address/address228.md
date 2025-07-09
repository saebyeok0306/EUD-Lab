# CUNIT - Idle Order Timer

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x59CCF9 | 19045 | 1.16.1 | 4 | 1 | None |

# Description

(*256) While the unit is specifically following the order to move to an area, the value of this address is 0. When it is not moving, the value appears to randomize itself. When the unit is given an order to attack an area, it switches from randomizing itself to being zero repeatedly with a delay. This might explain why units that are attacking are slower at firing the auto-acquired target once it is in range than it is to patrol towards them instead. Note that a building is always zero.<br><br>0x0059CCFA (*65536)<br>0x0059CCFB (*16777216)