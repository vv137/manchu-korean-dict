# 만주어 사전 (Manchu Dictionary) Project

이 프로젝트는 웹 기반의 만주어 사전 애플리케이션입니다. 사용자가 만주어, 한국어, 영어, 로마자 표기를 통해 단어를 검색하고 학습할 수 있도록 돕습니다.

## 주요 기능 (Features)

*   **다국어 검색 지원:** 만주어(Manchu), 한국어(Korean), 영어(English), 로마자(Romanization)로 단어를 검색할 수 있습니다.
*   **만주어 입력 모드:** 로마자를 입력하면 자동으로 만주어 스크립트로 변환하여 검색하는 기능을 제공합니다.
*   **상세한 단어 정보:** 표제어(만주어 문자), 로마자 표기, 뜻풀이(한국어/영어), 예문 및 번역을 제공합니다.
*   **필터링:** 언어별(한국어/영어) 필터링 및 태그 기반 필터링을 지원합니다.
*   **반응형 디자인:** 데스크톱 및 모바일 환경에 최적화된 UI를 제공합니다.
*   **전용 폰트:** `Noto Sans Mongolian` 폰트를 사용하여 만주어 문자를 올바르게 렌더링합니다.

## 파일 구성 (File Structure)

```
manchu-dict/
├── index.html              # 메인 웹페이지
├── styles.css              # 스타일시트
├── manchu-converter.js     # 로마자 ↔ 만주어 변환
├── NotoSansMongolian-Regular.woff  # 만주어 폰트
└── dictionaries/           # 사전 데이터 디렉터리
    ├── dictionaries.json   # 사전 목록 (manifest)
    └── manchu-korean.json  # 사전 데이터 파일
```

## 실행 방법 (How to Run)

이 프로젝트는 별도의 복잡한 설치 과정 없이 Python이 설치된 환경에서 바로 실행할 수 있습니다.

터미널에서 프로젝트 디렉토리로 이동한 후, 아래 명령어를 실행하세요.

```bash
# 기본 포트(8000)로 실행
python3 -m http.server

# 또는 특정 포트(예: 8080)로 실행
python3 -m http.server 8080
```

명령어를 실행한 뒤, 웹 브라우저를 열고 `http://localhost:8000` (또는 지정한 포트)으로 접속하면 사전을 사용할 수 있습니다.

## 데이터 구조 (Data Structure)

### 사전 목록 (dictionaries.json)

```json
{
  "dictionaries": [
    {
      "id": "manchu-korean",
      "file": "manchu-korean.json"
    }
  ]
}
```

### 사전 파일 형식

각 사전 파일은 `meta` 레코드와 `entries` 배열을 포함합니다.

```json
{
  "meta": {
    "id": "manchu-korean",
    "name": "만주어-한국어 사전",
    "name_en": "Manchu-Korean Dictionary",
    "description": "만주어-한국어/영어 사전 데이터",
    "languages": ["mnc", "ko", "en"],
    "version": "1.0.0"
  },
  "entries": [...]
}
```

#### Meta 필드 설명

| 필드 | 타입 | 설명 |
|------|------|------|
| `id` | String | 사전 고유 식별자 |
| `name` | String | 사전 이름 (한국어) |
| `name_en` | String | 사전 이름 (영어) |
| `description` | String | 사전 설명 |
| `languages` | Array | 포함된 언어 코드 (ISO 639) |
| `version` | String | 버전 (Semantic Versioning) |

### Entry 구조

```json
{
  "id": 1,
  "headword": "aba",
  "romanization": "ABA",
  "meanings": [
    { "lang": "en", "text": "hunt, battue" },
    { "lang": "ko", "text": "사냥, 몰이" }
  ],
  "examples": [
    {
      "manchu": "ABA SAHA",
      "translation_en": "hunting",
      "translation_ko": "사냥"
    }
  ],
  "tags": ["tag1", "tag2"]
}
```

#### Entry 필드 설명

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| `id` | Integer | ✓ | 항목 고유 식별자 |
| `headword` | String | ✓ | 표제어 (로마자) |
| `romanization` | String | ✓ | 로마자 표기 |
| `meanings` | Array | ✓ | 뜻풀이 배열 (`lang`: 언어, `text`: 내용) |
| `examples` | Array | | 예문 배열 |
| `tags` | Array | | 태그 문자열 배열 |

