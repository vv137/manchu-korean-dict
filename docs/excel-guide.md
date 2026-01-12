# Excel 사전 관리 가이드

만주어-한국어 사전을 Excel 스프레드시트로 관리하는 방법을 안내합니다.

## 스프레드시트 구조

### 시트 1: `entries` (표제어 및 의미)

| 컬럼 | 설명 | 예시 |
|------|------|------|
| `id` | 표제어 ID | 1 |
| `headword` | 만주어 표제어 | a |
| `romanization` | 로마자 표기 | A |
| `meaning_num` | 의미 번호 (다의어 구분) | 1 |
| `meaning_ko` | 한국어 의미 | 남성의 또는 긍정적인 원리, 양(陽) |

#### 다의어 예시

| id | headword | romanization | meaning_num | meaning_ko |
|----|----------|--------------|-------------|------------|
| 1 | a | A | 1 | 남성의 또는 긍정적인 원리, 양(陽) |
| 1 | a | A | 2 | 볼록한, 솟아오른 |
| 1 | a | A | 3 | 응답의 감탄사 |
| 5 | aba | ABA | 1 | 사냥, 몰이 |
| 5 | aba | ABA | 2 | 어디 |

### 시트 2: `examples` (예문)

| 컬럼 | 설명 | 예시 |
|------|------|------|
| `id` | 표제어 ID (외래키) | 1 |
| `manchu` | 만주어 예문 | A A |
| `translation_ko` | 한국어 번역 | 일상적인 대답의 감탄사 |

---

## 변환기 사용법

### 설치

```bash
cd scripts
uv sync
```

### JSON → Excel 변환

```bash
# 한국어 (기본값)
uv run dict_converter.py json2excel ../dictionaries/manchu-korean.json output.xlsx

# 영어
uv run dict_converter.py json2excel ../dictionaries/manchu-korean.json output.xlsx --lang en
```

### Excel → JSON 변환

```bash
# 한국어 (기본값)
uv run dict_converter.py excel2json input.xlsx ../dictionaries/manchu-korean.json

# 영어
uv run dict_converter.py excel2json input.xlsx ../dictionaries/manchu-english.json --lang en
```

---

## 편집 팁

1. **새 표제어 추가**: `entries` 시트에 새 행 추가
2. **다의어 추가**: 같은 `headword`로 새 행 추가, `meaning_num` 증가
3. **예문 추가**: `examples` 시트에 해당 `headword`로 새 행 추가
4. **정렬**: `headword` 기준 오름차순 정렬 권장
