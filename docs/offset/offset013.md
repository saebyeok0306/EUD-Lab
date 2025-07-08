# Image Drawing Functions

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x5125A0 | -122737 | 1.16.1 | 12 | 18 | None |

# Description

This corresponds to a value in images.dat. The official name for this array is sgDrawFuncs.

**Structure:**

| Offset | Field Description          |
| :----- | :------------------------- |
| +0x0   | id                         |
| +0x4   | normal draw function pointer |
| +0x8   | mirror draw function       |

<br>
이것은 images.dat 파일의 값에 해당합니다. 이 배열의 공식 명칭은 sgDrawFuncs입니다.

**구조체:**

| 오프셋 | 필드 설명         |
| :----- | :---------------- |
| +0x0   | ID                |
| +0x4   | 일반 그리기 함수 포인터 |
| +0x8   | 미러 그리기 함수  |

<br>
> 해당 내용은 인공지능을 통해 번역 및 작성되었습니다.