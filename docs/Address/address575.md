# Sfxdata.dat - Sound file

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x68DAA0 | 265679 | 1.16.1 | 4 | 1144 | None |

# Description

Direct pointer to SFXData.tbl string. This can be changed as long as the wav hasn't been loaded. This means that any wav without the 'preload' flag should be able to be pointed to a different wav file.