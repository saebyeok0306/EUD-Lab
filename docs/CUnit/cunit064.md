# 0x0D0: unionData2

| Name | unionData2 |
| ----| ------------ |
| Offset | 0x0D0 |
| Type | union |
| Mask | 0xFFFFFFFF |
| Description | union 형식으로 저장된 특수한 유닛 정보들 (자원, 나이더스 커널, 고스트, 파일런, 사일로, 해처리 등) |<br>

# resource

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0D0 | u16 | 0x0000FFFF | resourceCount | amount of resources |
| 0x0D2 | u8 | 0x00FF0000 | resourceIscript |  |
| 0x0D3 | u8 | 0xFF000000 | gatherQueueCount |  |
| 0x0D4 | BW::CUnit* | 0xFFFFFFFF | nextGatherer | pointer to the next workerunit waiting in line to gather |
| 0x0D8 | u8 | 0x000000FF | resourceGroup |  |
| 0x0D9 | u8 | 0x0000FF00 | resourceBelongsToAI |  |<br>

# nydus

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0D0 | BW::CUnit* | 0xFFFFFFFF | exit | connected nydius canal |<br>

# ghost

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0D0 | BW::CSprite* | 0xFFFFFFFF | nukeDot |  |<br>

# pylon

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0D0 | BW::CSprite* | 0xFFFFFFFF | pPowerTemplate |  |<br>

# silo

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0D0 | BW::CUnit* | 0xFFFFFFFF | pNuke | attached nuke |
| 0x0D4 | bool | 0xFFFFFFFF | bReady |  |<br>

# hatchery

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0D0 | ::rect | 0xFFFFFFFF | harvestValue | wtf??? |<br>

# powerup

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0D0 | points | 0xFFFFFFFF | origin |  |<br>

# gatherer

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0D0 | BW::CUnit* | 0xFFFFFFFF | harvestTarget |  |
| 0x0D4 | BW::CUnit* | 0xFFFFFFFF | prevHarvestUnit | When there is a gather conflict |
| 0x0D8 | BW::CUnit* | 0xFFFFFFFF | nextHarvestUnit |  |<br>

