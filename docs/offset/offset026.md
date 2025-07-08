# Mouse and Keyboard Scroll Speed

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x513B68 | -121343 | 1.16.1 | 7 | 7 | Supported |

# Description

> Edited by PereC, 2021.04.12

For SC:R,

In **menu** - **Options** - **Speed**, you can set Key Scroll Speed and Mouse Scroll Speed, each has 7 levels.
For each level, the Scroll Speed has 7 different values, each 1 byte.

| Level | Start Address | End Address |
| :---- | :------------ | :---------- |
| 1     | `0x513B68`    | `0x513B6E`  |
| 2     | `0x513B6F`    | `0x513B75`  |
| 3     | `0x513B76`    | `0x513B7C`  |
| 4     | `0x513B7D`    | `0x513B83`  |
| 5     | `0x513B84`    | `0x513B8A`  |
| 6     | `0x513B8B`    | `0x513B91`  |
| 7     | `0x513B92`    | `0x513B98`  |

If you set all the 7 bytes of level2 to `0`, then you can't scroll the screen by mouse if you set the Mouse Scroll Speed to level2 in game, but you can still scroll screen by keyboard if Key Scroll Speed is not in level2.
If you set all the 49 bytes to `0`, then you can't scroll the screen using mouse or keyboard.

See: [https://cafe.naver.com/edac/39325](https://cafe.naver.com/edac/39325)

<br>
> PereC 편집, 2021.04.12

SC:R의 경우,

게임 내 **메뉴** - **환경 설정** - **속도**에서 '키 스크롤 속도'와 '마우스 스크롤 속도'를 설정할 수 있으며, 각 항목은 7단계로 이루어져 있습니다.
각 단계별 스크롤 속도는 7가지 다른 값(각 1바이트)을 가집니다.

| 단계 | 시작 주소 | 끝 주소 |
| :--- | :---------- | :---------- |
| 1    | `0x513B68`  | `0x513B6E`  |
| 2    | `0x513B6F`  | `0x513B75`  |
| 3    | `0x513B76`  | `0x513B7C`  |
| 4    | `0x513B7D`  | `0x513B83`  |
| 5    | `0x513B84`  | `0x513B8A`  |
| 6    | `0x513B8B`  | `0x513B91`  |
| 7    | `0x513B92`  | `0x513B98`  |

레벨2의 7바이트 값을 모두 `0`으로 설정하면, 게임 내 마우스 스크롤 속도를 레벨2로 설정했을 때 마우스로 화면을 스크롤할 수 없게 됩니다. 하지만 키 스크롤 속도가 레벨2가 아니라면 키보드로는 여전히 화면을 스크롤할 수 있습니다.
모든 49바이트 값을 모두 `0`으로 설정하면, 마우스나 키보드를 사용하여 화면을 스크롤할 수 없게 됩니다.

참조: [https://cafe.naver.com/edac/39325](https://cafe.naver.com/edac/39325)

<br>
> 해당 내용은 인공지능을 통해 번역 및 작성되었습니다.