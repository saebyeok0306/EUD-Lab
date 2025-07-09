# Weapons.dat - Target Flags

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x657998 | 210317 | 1.16.1 | 2 | 130 | Simple Data |

# Description

0x001 Air<br>0x002 Ground<br>0x004 Mechanical<br>0x008 Organic<br>0x010 non-Building<br>0x020 non-Robotic<br>0x040 Terrain<br>0x080 Organic or Mechanical<br>0x100 Own<br><br>This is actually better thought of "which units can this weapon deal damage to". Eg if you give a ground weapon the air + ground target as well as splash, then when it attacks a ground unit, any air units in the vicinity will also take splash damage. If you also set it to have Mechanical targeting, then the weapon will be able to attack all types of ground units, but only deal damage to ones with the mechanical flag.