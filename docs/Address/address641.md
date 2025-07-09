# Replay Header - Player Entries

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x6D0FD1 | 334619 | 1.16.1 | 36 | 12 | Read Only |

# Description

Unfortunately this struct is not dword-aligned.<br><br>+0 - u32 slot (0x006D0FD1)<br>+4 - u32 storm ID (0x006D0FD5)<br>+8 - u8 type (0x006D0FD9)<br>+9 - u8 race (0x006D0FDA)<br>+A - u8 team (0x006D0FDB)<br>+B - char name[25] (0x006D0FDC)<br><br>For next player add 9 player ID's.