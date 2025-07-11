# Address

메모리 주소를 조사하여 각 주소가 어떤 기능을 하는지 설명하는 테이블입니다. 리마스터 이후로는 아예 지원되지 않거나 읽기(Read Only)인 주소도 있습니다.

## 사용예시

자세한 설명은 [[이론 강좌] 메모리의 이해 0강 - 메모리란 무엇인가?](https://cafe.naver.com/edac/123882) 링크의 시리즈 글을 읽는 것을 추천합니다. 아래의 예시에서는 [Damage type/factor multipliers vs unit size](/Address/address034/) 주소를 기준으로 설명합니다.

> Damage type/factor multipliers vs unit size

| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| 0x515B84 | -119288 | 1.16.1 | 20 | 5 | None |

해당 주소는 크기가 20(바이트), 배열의 길이는 5입니다. 그리고 친절하게도 구조는 아래와 같다고 설명하고 있습니다.

```C++
struct {
    int id;
    int multipliers[4]; // independant = 0, small = 1, medium = 2, large = 3
} dmgMultiplier;
```

struct의 구성을 보시면, int는 4바이트입니다. id 하나에, multipliers가 int배열로 4칸을 가지므로, <mark>4 + 4*4 = 20바이트</mark>로, Size에서 설명하는 크기와 같네요. 그러면, 아래와 같은 메모리구조를 가집니다.

| `Address`  | `Description`                 |
|------------|-------------------------------|
| 0x515B84   | id // Independent damage      |
| 0x515B88   | multipliers[0] // independant |
| 0x515B8C   | multipliers[1] // small       |
| 0x515B90   | multipliers[2] // medium      |
| 0x515B94   | multipliers[3] // large       |
| 0x515B98   | id // Explosive damage        |
| 0x515B9C   | multipliers[0] // independant |
| 0x515BA0   | multipliers[1] // small       |
| 0x515BA4   | multipliers[2] // medium      |
| 0x515BA8   | multipliers[3] // large       |
| ...        | ...                           |
| 0x515BD4   | id // Ignore armor            |
| 0x515BD8   | multipliers[0] // independant |
| 0x515BDC   | multipliers[1] // small       |
| 0x515BE0   | multipliers[2] // medium      |
| 0x515BE4   | multipliers[3] // large       |

메모리 구조를 파악했으면, 이제 이걸 활용하는 건 매우 쉽습니다. <mark>256 = 100%</mark>라고 설명하고 있으므로, 상성이 안좋아서 50%의 데미지만 들어가게 하고 싶다면 128, 반대로 200%의 데미지가 들어가려면 2를 곱한 512를 원하는 주소에 대입하면 됩니다.

폭발형 무기(Explosive damage)가 소형유닛(small)에게 50%의 데미지만 들어가게 만들어봅시다. (마치 진동형같네요) 폭발형 -> 소형이므로, 폭발형무기의 주소인 `0x515B98`에서 소형에게 데미지를 적용하는 주소는 `0x515BA0`이네요. 그럼 최종적으로 `0x515BA0` 주소의 값을 50%인 128로 쓰기(write)하면 됩니다.  

EUD트리거에서 주소에 어떤 값을 read/write 하는 건 다 <mark>4바이트</mark>가 기준입니다. 하지만 마침 수정하고자 하는 주소는 4바이트 전부 사용하므로 마음 편하게 대입하면 되겠네요.

```js
SetMemory(0x515BA0, SetTo, 128); // ptr 방식
SetMemoryEPD(EPD(0x515BA0), SetTo, 128); // epd 방식
dwwrite(0x515BA0, 128); // eudplib에서 지원하는 함수
dwwrite_epd(EPD(0x515BA0), 128); // epd 버전
```