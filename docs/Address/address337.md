# CUnit - Ensnare Timer

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x59CDBE | 19094 | 1.16.1 | 1 | 1 | Supported |

# Description

The amount of time remaining (*65536) to ensure by a queen, infested Kerrigan.<br><br>Initialised to 75 (4915200). Timers decay 1 tick per 8 frames, so 75 / 2.9762 = 25.2 RL seconds on Fastest.<br><br>75 timer * 8 frame * 0.042 seconds (Which is MS)