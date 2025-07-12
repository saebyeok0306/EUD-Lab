# 0x0F8: Rally XY

| Name | Rally XY |
| ----| ------------ |
| Offset | 0x0F8 |
| Type | union |
| Mask | 0xFFFFFFFF |
| Description | 랠리 x,y좌표(각 2바이트) (랠리가 있는 유닛에게만 적용) |<br>

# rally

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0F8 | points | 0xFFFFFFFF | position |  |
| 0x0FC | BW::CUnit* | 0xFFFFFFFF | unit |  |<br>

# PsiProvider

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x0F8 | BW::CUnit* | 0xFFFFFFFF | prevPsiProvider |  |
| 0x0FC | BW::CUnit* | 0xFFFFFFFF | nextPsiProvider |  |<br>

