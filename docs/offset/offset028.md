# Unit Reqs data

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x514178 | -120955 | 1.16.1 | 1090 | 1 | Simple Data |

# Description

A packed list of opcodes and parameters for data requirements.

The structure of the data is as follows:

| Element             | Description                                     |
| :------------------ | :---------------------------------------------- |
| **First u16**       | The unit ID for the script.                     |
| **Following data**  | The script content.                             |

Within the script, the following conventions apply:

| Value Type        | Hexadecimal Format | Description                         |
| :---------------- | :----------------- | :---------------------------------- |
| **Opcode**        | `0x##FF`           | An operation code.                  |
| **Parameter**     | `0x##00`           | A parameter value.                  |
| **End of Script** | `FFFF`             | Marks the end of the script.        |

<br>
데이터 요구 사항을 위한 압축된 연산 코드 및 매개변수 목록입니다.

데이터 구조는 다음과 같습니다:

| 요소                  | 설명                                 |
| :-------------------- | :----------------------------------- |
| **첫 번째 u16**       | 스크립트의 유닛 ID.                    |
| **이어지는 데이터**   | 스크립트 내용.                       |

스크립트 내에서는 다음 규칙이 적용됩니다:

| 값 유형           | 16진수 형식    | 설명                     |
| :---------------- | :------------- | :----------------------- |
| **연산 코드**     | `0x##FF`       | 연산 코드.               |
| **매개변수**      | `0x##00`       | 매개변수 값.             |
| **스크립트 끝**   | `FFFF`         | 스크립트의 끝을 나타냅니다. |

<br>
> 해당 내용은 인공지능을 통해 번역 및 작성되었습니다.