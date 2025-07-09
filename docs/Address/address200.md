# CUnit - HP

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x59CCB0 | 19027 | 1.16.1 | 4 | 1 | Supported |

# Description

Amount of HP that a unit currently has.<br><br>Value displayed in-game is divided by 256.  For example, a Marine that has 40 HP in-game would have 10240 or 0x2800 HP in memory.<br><br>Offset from unit index address: 0x08<br>Unit Index 0 HP = 0x0059CCA8 + 0x08 = 0x0059CCB0<br>Unit Index 1 HP = 0x00628298 + 0x08 = 0x006282A0<br>Unit Index 2 HP = 0x00628148 + 0x08 = 0x00628150<br><br>Example: Regenerate HP for unit at index 2 to a max of 100 HP<br><br>Unit Index 2 HP = 0x00628148 + 0x08 = 0x00628150<br><br>Trigger("Player 1"){<br>Conditions:<br>  // HP is less than 100<br>  MemoryAddr(0x628150, At most, 25599);<br><br>Actions:<br>  // Add 16/256 HP<br>  MemoryAddr(0x628150, Add, 16);<br>  Preserve Trigger();<br>}<br><br>//-----------------------------------------------------------------//<br><br>Trigger("Player 1"){<br>Conditions:<br>  // HP is over 100<br>  MemoryAddr(0x628150, At least, 25601);<br><br>Actions:<br>  // Set to 100 HP<br>  MemoryAddr(0x628150, Set To, 25600);<br>  Preserve Trigger();<br>}