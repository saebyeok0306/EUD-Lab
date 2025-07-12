# 0x0C0: unionData1

| Name | unionData1 |
| ----| ------------ |
| Offset | 0x0C0 |
| Type | union |
| Mask | 0xFFFFFFFF |
| Description | union 형식으로 저장된 특수한 유닛 정보들 (마인 개수, 격납 유닛 정보들, 애드온 정보, 자원 정보, 기술/업그레이드 남은 시간, 업그레이드 중인 업그레이드/기술 번호 등) |<br>

# vulture

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0C0 | u8 | 0x000000FF | spiderMineCount | 남은 마인 개수 |<br>

# carrier

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0C0 | BW::CUnit* | 0xFFFFFFFF | pInHanger | first child inside the hanger |
| 0x0C4 | BW::CUnit* | 0xFFFFFFFF | pOutHanger | first child outside the hanger |
| 0x0C8 | u8 | 0x000000FF | inHangerCount | number inside the hanger (used for scarab count) |
| 0x0C9 | u8 | 0x0000FF00 | outHangerCount | number outside the hanger |<br>

# fighter

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0C0 | BW::CUnit* | 0xFFFFFFFF | parent |  |
| 0x0C4 | BW::CUnit* | 0xFFFFFFFF | prev |  |
| 0x0C8 | BW::CUnit* | 0xFFFFFFFF | next |  |
| 0x0CC | bool | 0xFFFFFFFF | inHanger |  |<br>

# beacon

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0C0 | u32 | 0xFFFFFFFF | _unknown_00 |  |
| 0x0C4 | u32 | 0xFFFFFFFF | _unknown_04 |  |
| 0x0C8 | u32 | 0xFFFFFFFF | flagSpawnFrame | flag beacons, the frame that the flag will spawn |<br>

# building

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0C0 | BW::CUnit* | 0xFFFFFFFF | addon |  |
| 0x0C4 | u16 | 0x0000FFFF | addon |  |
| 0x0C6 | u16 | 0xFFFF0000 | upgradeResearchTime |  |
| 0x0C8 | u8 | 0x000000FF | techType |  |
| 0x0C9 | u8 | 0x0000FF00 | upgradeType |  |
| 0x0CA | u8 | 0x00FF0000 | larvaTimer |  |
| 0x0CB | u8 | 0xFF000000 | landingTimer |  |
| 0x0CC | u8 | 0x000000FF | creepTimer |  |
| 0x0CD | u8 | 0x0000FF00 | upgradeLevel |  |
| 0x0CE | u16 | 0xFFFF0000 | __E |  |<br>

# worker

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0C0 | BW::CUnit* | 0xFFFFFFFF | pPowerup |  |
| 0x0C4 | points | 0xFFFFFFFF | targetResource |  |
| 0x0C8 | BW::CUnit* | 0xFFFFFFFF | targetResourceUnit |  |
| 0x0CC | u16 | 0x0000FFFF | repairResourceLossTimer |  |
| 0x0CE | bool | 0xFFFFFFFF | isCarryingSomething | There is a "ubIsHarvesting" somewhere |
| 0x0CF | u8 | 0xFF000000 | resourceCarryCount |  |<br>

