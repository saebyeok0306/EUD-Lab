# 0x0D0: unionData2

| Name | unionData2 |
| ----| ------------ |
| Offset | 0x0D0 |
| Type | union |
| Description | union 형식으로 저장된 특수한 유닛 정보들 (자원, 나이더스 커널, 고스트, 파일런, 사일로, 해처리 등) |<br>

# resource

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0D0 | u16 | resourceCount | amount of resources |
| 0x0D2 | u8 | resourceIscript |  |
| 0x0D3 | u8 | gatherQueueCount |  |
| 0x0D4 | BW::CUnit* | nextGatherer | pointer to the next workerunit waiting in line to gather |
| 0x0D8 | u8 | resourceGroup |  |
| 0x0D9 | u8 | resourceBelongsToAI |  |<br>

# nydus

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0D0 | BW::CUnit* | exit | connected nydius canal |<br>

# ghost

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0D0 | BW::CSprite* | nukeDot |  |<br>

# pylon

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0D0 | BW::CSprite* | pPowerTemplate |  |<br>

# silo

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0D0 | BW::CUnit* | pNuke | attached nuke |
| 0x0D4 | bool | bReady |  |<br>

# hatchery

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0D0 | ::rect | harvestValue | wtf??? |<br>

# powerup

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0D0 | points | origin |  |<br>

# gatherer

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0D0 | BW::CUnit* | harvestTarget |  |
| 0x0D4 | BW::CUnit* | prevHarvestUnit | When there is a gather conflict |
| 0x0D8 | BW::CUnit* | nextHarvestUnit |  |<br>

