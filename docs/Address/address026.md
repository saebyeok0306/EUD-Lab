# Mouse and Keyboard Scroll Speed

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x513B68 | -121343 | 1.16.1 | 7 | 7 | Supported |

# Description

Edited by PereC, 2021.04.12<br>For SC:R,<br>In menu - Options - Speed, you can set Key Scroll Speed and Mouse Scroll Speed, each has 7 levels.<br>For each level, the Scroll Speed has 7 different values, each 1 byte.<br>level 1: 0x513B68, 0x513B69, 0x513B6A, ..., 0x513B6E<br>level 2: 0x513B6F, 0x513B70, 0x513B71, ..., 0x513B72<br>...<br>level 7: 0x513B92, 0x513B93, 0x513B94, ..., 0x513B98<br><br>If you set all the 7 bytes of level2 to 0, then you can't scroll the screen by mouse if you set the Mouse Scroll Speed to level2 in game, but you can still scroll screen by keyboard if Key Scroll Speed is not in level2.<br>If you set all the 49 bytes to 0, then you can't scroll the screen using mouse or keyboard.<br><br>See: https://cafe.naver.com/edac/39325