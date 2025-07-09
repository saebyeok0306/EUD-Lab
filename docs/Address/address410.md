# Trigger Execution Timer (Hyper triggers)

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x6509A0 | 203151 | 1.16.1 | 4 | 1 | Simple Data |

# Description

When this value reaches 0, trigger loop executes.<br><br>Preserve to 0 for single-tick hypers, or 1 for traditional hyper triggers (2 ticks).<br><br>Wait(n) will make this value 1 after ceil(n / 'ms per tick') + 1, so Wait(0) makes this value to 1, making the trigger loop execute every 2 ticks.