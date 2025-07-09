# 0x00C: sprite

| Name | sprite |
| ----| ------------ |
| Offset | 0x00C |
| Type | BW::CSprite* |
| Description | CSprite의 주소 |<br>

# Detail

| Offset | Type | Name | Description |
| -------| -----| -----| ------------ |
| 0x00 | CSprite* | prev |  |
| 0x04 | CSprite* | next |  |
| 0x08 | u16 | spriteID |  |
| 0x0A | u8 | playerID | officially "creator" |
| 0x0B | u8 | selectionIndex | 0 <= selectionIndex <= 11. Index in the selection area at bottom of screen. |
| 0x0C | u8 | visibilityFlags | Player bits indicating the visibility for a player (SCR 미지원) |
| 0x0D | u8 | elevationLevel | SCR 미지원 |
| 0x0E | u8 | flags | 0x01 Draw selection circle.<br>0x02<br>0x04<br>0x08 Selected.<br>0x10<br>0x20 Hidden<br>0x40 Burrowed<br>0x80 Iscript unbreakable code section.(SCR 미지원) |
| 0x0F | u8 | selectionTimer | SCR 미지원 |
| 0x10 | u16 | index | SCR 미지원 |
| 0x12 | u8 | unkflags_12 | SCR 미지원 |
| 0x13 | u8 | unkflags_13 | SCR 미지원 |
| 0x14 | Position | position | SCR 미지원 |
| 0x18 | CImage* | pImagePrimary | SCR 미지원 |
| 0x1C | CImage* | pImageHead | SCR 미지원 |
| 0x20 | CImage* | pImageTail | SCR 미지원 |<br>

