# SC Technologies Available (0-23)

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x58CE24 | 2736 | 1.16.1 | 24 | 12 | Simple Data |

# Description

Table layout is reverse compared to deaths/kills table.<br><br>1 row per player, 24 bytes per row, 1 byte per tech.<br><br>BW techs are elsewhere.<br><br>Offset: 24 * Player + Offs<br><br>SC Techs:<br>ID  Offs. Name<br>00  +0    Stim Packs<br>01  +1    Lockdown<br>02  +2    EMP Shockwave<br>03  +3    Spider Mines<br>04  +4    Scanner Sweep<br>05  +5    Tank Siege Mode<br>06  +6    Defensive Matrix<br>07  +7    Irradiate<br>08  +8    Yamato Gun<br>09  +9    Cloaking Field<br>10  +10   Personnel Cloaking<br>11  +11   Burrowing<br>12  +12   Infestation<br>13  +13   Spawn Broodlings<br>14  +14   Dark Swarm<br>15  +15   Plague<br>16  +16   Consume<br>17  +17   Ensnare<br>18  +18   Parasite<br>19  +19   Psionic Storm<br>20  +20   Hallucination<br>21  +21   Recall<br>22  +22   Stasis Field<br>23  +23   Archon Warp