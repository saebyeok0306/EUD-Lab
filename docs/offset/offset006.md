# Establishing shot pointers

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x4FFF60 | -141569 | 1.16.1 | 8 | 65 | None |

# Description

- 64 entries defining campaign mission prologue/establishing shots
- 1 entry defining campaign mission epilogue (hybrids bonus mission)

| Type | Description |
| :--- | :---------- |
| INT  | pointer to script filename |
| INT  | mapdata.dat index |

<br>
- 캠페인 미션 프롤로그/설정 장면을 정의하는 64개의 엔트리
- 캠페인 미션 에필로그(하이브리드 보너스 미션)를 정의하는 1개의 엔트리

| 타입 | 설명 |
| :--- | :---------- |
| INT  | 스크립트 파일명에 대한 포인터 |
| INT  | mapdata.dat 인덱스 |

<br>
> 해당 내용은 인공지능을 통해 번역 및 작성되었습니다.