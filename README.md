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

*   `index.html`: 사전 애플리케이션의 메인 웹페이지입니다. UI 및 검색 로직이 포함되어 있습니다.
*   `dictionary-data.json`: 사전 데이터를 담고 있는 JSON 파일입니다.
*   `manchu-converter.js`: 로마자를 만주어 스크립트로 변환하거나 그 반대로 변환하는 로직을 담은 스크립트입니다.
*   `NotoSansMongolian-Regular.woff`: 만주어 텍스트 표시를 위한 웹 폰트 파일입니다.

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

`dictionary-data.json` 파일은 다음과 같은 JSON 구조를 가집니다.

```json
{
  "entries": [
    {
      "id": 1,
      "headword": "aba",
      "romanization": "ABA",
      "meanings": [
        {
          "lang": "en",
          "text": "hunt, battue"
        },
        {
          "lang": "ko",
          "text": "사냥, 몰이"
        }
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
  ]
}
```

*   **entries**: 단어 항목들의 배열입니다.
    *   **id**: 각 항목의 고유 식별자(Integer)입니다.
    *   **headword**: 표제어(String)입니다. 주로 로마자로 표기됩니다.
    *   **romanization**: 표제어의 로마자 표기(String)입니다. 검색 및 정렬에 사용됩니다.
    *   **meanings**: 단어의 의미를 담은 객체들의 배열입니다.
        *   **lang**: 언어 코드 (`en`: 영어, `ko`: 한국어).
        *   **text**: 뜻풀이 텍스트.
    *   **examples** (Optional): 예문 객체들의 배열입니다.
        *   **manchu**: 만주어 예문 (로마자 표기).
        *   **translation_en**: 예문의 영어 번역.
        *   **translation_ko**: 예문의 한국어 번역.
    *   **tags** (Optional): 단어와 관련된 태그 문자열들의 배열입니다.
