# 0x00C: sprite

| Name | sprite |
| ----| ------------ |
| Offset | 0x00C |
| Type | BW::CSprite* |
| Mask | 0xFFFFFFFF |
| Description | CSprite의 주소 |<br>

# Detail

| Offset | Type | Mask | Name | Description |
| -------| -----| ---- | -----| ------------ |
| 0x00 | CSprite* | 0xFFFFFFFF | prev |  |
| 0x04 | CSprite* | 0xFFFFFFFF | next |  |
| 0x08 | u16 | 0x0000FFFF | spriteID |  |
| 0x0A | u8 | 0x00FF0000 | playerID | officially "creator" |
| 0x0B | u8 | 0xFF000000 | selectionIndex | 0 <= selectionIndex <= 11. Index in the selection area at bottom of screen. |
| 0x0C | u8 | 0x000000FF | visibilityFlags | Player bits indicating the visibility for a player (SCR 미지원) |
| 0x0D | u8 | 0x0000FF00 | elevationLevel | SCR 미지원 |
| 0x0E | u8 | 0x00FF0000 | flags | 0x01 Draw selection circle.<br>0x02<br>0x04<br>0x08 Selected.<br>0x10<br>0x20 Hidden<br>0x40 Burrowed<br>0x80 Iscript unbreakable code section.(SCR 미지원) |
| 0x0F | u8 | 0xFF000000 | selectionTimer | SCR 미지원 |
| 0x10 | u16 | 0x0000FFFF | index | SCR 미지원 |
| 0x12 | u8 | 0x00FF0000 | unkflags_12 | SCR 미지원 |
| 0x13 | u8 | 0xFF000000 | unkflags_13 | SCR 미지원 |
| 0x14 | Position | 0xFFFFFFFF | position | SCR 미지원 |
| 0x18 | CImage* | 0xFFFFFFFF | pImagePrimary | SCR 미지원 |
| 0x1C | CImage* | 0xFFFFFFFF | pImageHead | SCR 미지원 |
| 0x20 | CImage* | 0xFFFFFFFF | pImageTail | SCR 미지원 |<br>

