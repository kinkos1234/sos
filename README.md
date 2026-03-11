# ONS Guide — 온톨로지 네이티브 시스템 종합 가이드

> "가장 본질로, 가장 물리적으로.. 지능을 해체해 들어가는 것만이 Agent 시대 유일한 해답입니다."

GraphRAG, 온톨로지, 메타엣지, 위상학적 지능, 팔란티어 AIP — 35개 핵심 개념을 5개 Tier로 체계화한 교육 사이트입니다.

## 빠른 시작

```bash
# 포크 후 클론
git clone https://github.com/<your-username>/sos.git
cd sos

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173/sos/` 접속

## 기능

- **5-Tier 체계적 학습** — 순수기초 → 응용기초 → 핵심 → 프레임워크 → 구현
- **인터랙티브 개념 관계도** — D3.js 기반 35개 개념 네트워크 그래프
- **역할별 학습 경로** — AI 엔지니어 / 데이터 사이언티스트 / 백엔드 / 기획 / 입문자
- **Mermaid 다이어그램** — GraphRAG 파이프라인, 레버 구조, ReBAC 관계 등
- **이해도 퀴즈** — 각 Tier별 5문항
- **진도 추적** — localStorage 기반 체크리스트
- **풀텍스트 검색** — 전체 콘텐츠 한글 검색
- **다크 모드** — Threads 스타일 미니멀 다크 테마 (기본)

## 프로젝트 구조

```
sos/
├── docs/                  # 원본 마크다운 콘텐츠
├── site/                  # VitePress 교육 사이트
│   ├── .vitepress/
│   │   ├── config.mts     # 사이트 설정
│   │   ├── theme/         # 커스텀 테마 + 컴포넌트
│   │   └── data/          # 개념 관계, 퀴즈 JSON 데이터
│   ├── index.md           # 랜딩 페이지
│   ├── overview/          # Executive Summary
│   ├── foundations/       # Tier -1: 순수기초 (P01~P10)
│   ├── applied/           # Tier 0: 응용기초 (F01~F10)
│   ├── core/              # Tier 1: 핵심 (C01~C05)
│   ├── framework/         # Tier 2: 프레임워크 (C06~C10)
│   ├── implementation/    # Tier 3: 구현 (C11~C15)
│   ├── writing/           # 글쓰기 메타온톨로지
│   ├── cmr/               # CMR & Audit
│   ├── guide/             # 입문자 로드맵
│   ├── graph.md           # 인터랙티브 개념 관계도
│   └── roadmap.md         # 학습 경로 시각화
├── .github/workflows/     # GitHub Pages 자동 배포
└── PRD.md                 # 제품 요구사항 문서
```

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 (HMR) |
| `npm run build` | 정적 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |

## 배포

GitHub에 push하면 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.

수동 배포:
```bash
npm run build
# site/.vitepress/dist/ 디렉토리를 원하는 서버에 배포
```

## 기술 스택

- [VitePress](https://vitepress.dev/) — Vue 기반 정적 사이트 생성기
- [D3.js](https://d3js.org/) — 인터랙티브 데이터 시각화
- [Mermaid](https://mermaid.js.org/) — 마크다운 다이어그램

## 크레딧

| 역할 | 링크 |
|------|------|
| **교육 사이트 기획·콘텐츠 구성** | [@comad.j](https://www.threads.com/@comad.j) |
| **세미나 원본 자료** | [@heretics_gene](https://www.threads.com/@heretics_gene) |
| **PDF 편집·지식베이스 구축** | [@specal1849](https://www.threads.com/@specal1849) |

## 원본 자료

- **v8-vs-compare-fixed.pdf** — 181페이지, 35개 핵심 개념, 5개 Tier 계층의 종합 지식베이스
- **3월 6-7일.docx** — 글쓰기 메타온톨로지 + CMR(Capability Maturity Registry) 실무 예시
