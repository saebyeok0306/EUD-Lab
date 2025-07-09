# Wirefram.grp Pointer

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x68C204 | 264104 | 1.16.1 | 4 | 1 | Backed By Code |

# Description

Overwriting a particular unit's frame offset with a different frame offset can change the image used for that unit.<br><br>GRP header:<br>u16 frameCount<br>u16 width<br>u16 height<br><br>GRP Frame (* frameCount)<br>u8 x<br>u8 y<br>u8 w<br>u8 h<br>u32 offset