# 0x0DC: statusFlags

| Name | statusFlags |
| ----| ------------ |
| Offset | 0x0DC |
| Type | u32 |
| Description | 스테이터스 플래그, 상태 정보 |<br>

# Detail

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 00000001(0x1) | bit | Completed | 완성되었으면 1, 미완성 건물이나 변태중인 알/코쿤 등은 0 |
| 00000010(0x2) | bit | Grounded Building | 지상에 있는 건물일 경우 1, 나머지 0 |
| 00000100(0x4) | bit | In Air | 공중일 경우 1 |
| 00001000(0x8) | bit | Checked for disabled | 라고 하는데 디시블이든 언파워든 변화가 없음 |
| 00010000(0x10) | bit | Burrowed | 버로우 상태일 경우 1 |
| 00100000(0x20) | bit | In Building | 건물(벙커)에 들어간 상태 |
| 01000000(0x40) | bit | In Transport | 수송선 안에 들어간 상태 |
| 10000000(0x80) | bit | Unknown1 |  |
| 00000001(0x100) | bit | Require Detection | 디텍터(탐지기) 필요 상태 (클로킹 해제 도중에는 0) |
| 00000010(0x200) | bit | Cloaked | 클로킹, 버로우 상태 (클로킹 되는 도중에는 0) |
| 00000100(0x400) | bit | Doodad States Thing | 디시블, 언파워(동력 끊김) 상태이면 1 |
| 00001000(0x800) | bit | Cloaking For Free | 마나 소비가 없는 클로킹 상태. (아비터 클로킹 필드 등) |
| 00010000(0x1000) | bit | Can Not Receive Orders | 명령을 받을 수 없는 상태 (버로우 도중, 건물 띄우거나 내리는 도중, 완성 모션 도중, 건물 짓기 시작하는 도중 등) |
| 00100000(0x2000) | bit | No Break Code Start | 명령을 무시하는 모션중이면 1 (건물 띄우거나 내릴때, 알에서 태어날 때, 발키리 공격 모션 등) |
| 01000000(0x4000) | bit | Unknown2 |  |
| 10000000(0x8000) | bit | CanNotAttack | 디스럽션 웹 안에 있는 상태 (공격 불가) |
| 00000001(0x10000) | bit | Can Move | 움직일 수 있으면 1, 아니면 0 (?) |
| 00000010(0x20000) | bit | Can Move | 움직일 수 있으면 1, 아니면 0 (?) |
| 00000100(0x40000) | bit | Ignore Tile Collision | 1이면 움직일 수 없음. 시즈모드한 탱크, 합체 중인 아콘/다크아콘, 버로우 해제 중인 저그 유닛, 저그 에그 등. 유닛 위에 CreateUnit, MoveUnit 등으로 인해 다른 유닛이 생겼을 때 아래에있던 유닛의 이 값이 잠시 1이 되는데 이 때문에 아래에 있던 유닛이 잠시 멈추면서 버벅이는 것. |
| 00001000(0x80000) | bit | Unit is Unmovable | 수송, 버로우 상태의 지상 유닛 |
| 00010000(0x100000) | bit | Is Normal | 지상 충돌 판정. 0이면 지형/다른 유닛, 건물 등을 모두 통과. 건물일 경우 1 |
| 00100000(0x200000) | bit | No Collide | 다른 지상유닛이 해당 유닛의 충돌 무시 (버로우, 비콘). |
| 01000000(0x400000) | bit | Unknown5 |  |
| 10000000(0x800000) | bit | Is Gathering | 자원 채취 판정. 유닛 통과 |
| 00000001(0x1000000) | bit | Unknown6 |  |
| 00000010(0x2000000) | bit | Unknown7 |  |
| 00000100(0x4000000) | bit | Invincible | 무적 상태 |
| 00001000(0x8000000) | bit | Holding Position | 자유 공격 상태. 1일 경우 지 꼴리는 적을 공격. 어택땅, 스탑, 홀드 상태 등에서 공격중일 경우 1. 강제 공격 중이거나 다른 명령중일때는 0. 벙커 내 유닛에게도 적용. |
| 00010000(0x10000000) | bit | Speed upgrade | 발업/속업 상태 |
| 00100000(0x20000000) | bit | Cooldown Upgrade | 공속 업그레이드 상태 |
| 01000000(0x40000000) | bit | Is Hallucination | 할루시네이션 상태 |
| 10000000(0x80000000) | bit | Is Self Destructing | 자폭중인 상태 (인페스티드 테란, 스커지, 스캐럽) |<br>

