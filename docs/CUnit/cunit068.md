# 0x0F8: Rally XY

| Name | Rally XY |
| ----| ------------ |
| Offset | 0x0F8 |
| Type | union |
| Description | 랠리 x,y좌표(각 2바이트) (랠리가 있는 유닛에게만 적용) |<br>

# rally

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0F8 | points | position |  |
| 0x0FC | BW::CUnit* | unit |  |<br>

# PsiProvider

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x0F8 | BW::CUnit* | prevPsiProvider |  |
| 0x0FC | BW::CUnit* | nextPsiProvider |  |<br>

