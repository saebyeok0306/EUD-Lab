# 0x0C0: unionData1

| Name | unionData1 |
| ----| ------------ |
| Offset | 0x0C0 |
| Type | union |
| Description | union 형식으로 저장된 특수한 유닛 정보들 (마인 개수, 격납 유닛 정보들, 애드온 정보, 자원 정보, 기술/업그레이드 남은 시간, 업그레이드 중인 업그레이드/기술 번호 등) |<br>

# vulture

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0C0 | u8 | spiderMineCount | 남은 마인 개수 |<br>

# carrier

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0C0 | BW::CUnit* | pInHanger | first child inside the hanger |
| 0x0C4 | BW::CUnit* | pOutHanger | first child outside the hanger |
| 0x0C8 | u8 | inHangerCount | number inside the hanger (used for scarab count) |
| 0x0C9 | u8 | outHangerCount | number outside the hanger |<br>

# fighter

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0C0 | BW::CUnit* | parent |  |
| 0x0C4 | BW::CUnit* | prev |  |
| 0x0C8 | BW::CUnit* | next |  |
| 0x0CC | bool | inHanger |  |<br>

# beacon

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0C0 | u32 | _unknown_00 |  |
| 0x0C4 | u32 | _unknown_04 |  |
| 0x0C8 | u32 | flagSpawnFrame | flag beacons, the frame that the flag will spawn |<br>

# building

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0C0 | BW::CUnit* | addon |  |
| 0x0C4 | u16 | addon |  |
| 0x0C6 | u16 | upgradeResearchTime |  |
| 0x0C8 | u8 | techType |  |
| 0x0C9 | u8 | upgradeType |  |
| 0x0CA | u8 | larvaTimer |  |
| 0x0CB | u8 | landingTimer |  |
| 0x0CC | u8 | creepTimer |  |
| 0x0CD | u8 | upgradeLevel |  |
| 0x0CE | u16 | __E |  |<br>

# worker

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0C0 | BW::CUnit* | pPowerup |  |
| 0x0C4 | points | targetResource |  |
| 0x0C8 | BW::CUnit* | targetResourceUnit |  |
| 0x0CC | u16 | repairResourceLossTimer |  |
| 0x0CE | bool | isCarryingSomething | There is a "ubIsHarvesting" somewhere |
| 0x0CF | u8 | resourceCarryCount |  |<br>

