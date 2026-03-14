# PRD — 온톨로지 네이티브 시스템 교육 사이트

> **프로젝트명**: SOS (Study of Ontology System)
> **작성일**: 2026-03-11
> **작성자**: [@comad.j](https://www.threads.com/@comad.j)

---

## 1. 프로젝트 개요

### 1.1 목적
온톨로지 네이티브 시스템에 대한 종합 교육 사이트를 구축한다.
입문자가 GitHub에서 포크한 후 로컬에서 실행하며 자기 주도 학습할 수 있는 구조.

### 1.2 핵심 가치
- **접근성**: `npm install` → `npm run dev` 로 즉시 실행
- **자기 주도 학습**: 체크리스트 기반 진도 추적
- **시각적 이해**: 35개 개념 간 관계를 인터랙티브 그래프로 탐색
- **포크 친화적**: GitHub Pages로 바로 배포 가능

### 1.3 크레딧

| 역할 | 링크 | 설명 |
|------|------|------|
| **교육 사이트 기획·콘텐츠 구성** | [@comad.j](https://www.threads.com/@comad.j) | 원본 자료를 활용한 교육 사이트 구축, 입문자 가이드 보완 및 전체 콘텐츠 구성 |
| **세미나 원본 자료** | [@heretics_gene](https://www.threads.com/@heretics_gene) | GraphRAG/AI Pipeline 세미나 발표자. 핵심 개념의 원저자 |
| **PDF 편집·지식베이스 구축** | [@specal1849](https://www.threads.com/@specal1849) | 세미나 내용을 181페이지 종합 지식베이스로 체계화 |

---

## 2. 기술 스택

| 카테고리 | 선택 | 이유 |
|---------|------|------|
| **프레임워크** | VitePress | 마크다운 네이티브, 빠른 빌드, GitHub Pages 호환 |
| **시각화 (정적)** | Mermaid | 마크다운 내장, 파이프라인·흐름도 |
| **시각화 (인터랙티브)** | D3.js | 35개 개념 네트워크 그래프, 클릭 탐색 |
| **시각화 (차트)** | Chart.js 또는 커스텀 Vue 컴포넌트 | 비교 테이블, 레이더 차트 |
| **검색** | VitePress 내장 MiniSearch | 로컬 풀텍스트 검색 |
| **상태 관리** | localStorage | 진도 추적 (서버 불필요) |
| **배포** | GitHub Pages | 포크 후 자동 배포 |
| **패키지 관리** | npm | 표준 |

---

## 3. 디자인 시스템

### 3.1 톤앤매너
- **Threads.com 스타일**: 미니멀, 다크, 높은 가독성
- 불필요한 장식 없이 콘텐츠 중심
- 여백을 넉넉하게 활용
- 타이포그래피 계층 명확

### 3.2 컬러 팔레트

```
Dark Mode (기본):
  Background:      #101010
  Surface:         #1a1a1a
  Surface Hover:   #242424
  Border:          #2e2e2e
  Text Primary:    #f5f5f5
  Text Secondary:  #a0a0a0
  Accent:          #7c5cfc (보라 — 온톨로지/구조적 지능의 상징)
  Accent Hover:    #9b82fc
  Success:         #34d399
  Warning:         #fbbf24
  Error:           #f87171

Light Mode:
  Background:      #ffffff
  Surface:         #f7f7f7
  Border:          #e5e5e5
  Text Primary:    #1a1a1a
  Text Secondary:  #6b6b6b
  Accent:          #6d4de6
```

### 3.3 타이포그래피
- **제목**: Pretendard (한글) / Inter (영문) — 600~700 weight
- **본문**: Pretendard / Inter — 400 weight, 1.7 line-height
- **코드**: JetBrains Mono 또는 Fira Code

### 3.4 반응형 브레이크포인트
- Mobile: < 768px
- Tablet: 768px ~ 1024px
- Desktop: > 1024px

---

## 4. 정보 구조 (IA)

```
/                              ← 랜딩 페이지
├── /overview                  ← Executive Summary
├── /foundations               ← Tier -1: 순수기초
├── /applied                   ← Tier 0: 응용기초
├── /core                      ← Tier 1: 핵심
├── /framework                 ← Tier 2: 프레임워크
├── /implementation            ← Tier 3: 구현
├── /writing                   ← 글쓰기 메타온톨로지
├── /cmr                       ← CMR & Audit
├── /guide                     ← 입문자 로드맵
├── /references                ← 참고 자료
├── /graph                     ← 인터랙티브 개념 관계도 (35개 개념)
└── /roadmap                   ← 학습 경로 시각화
```

---

## 5. 기능 명세

### 5.1 MVP 기능 (v1.0)

#### F1. 문서 열람
- 기존 `docs/` 마크다운을 VitePress로 렌더링
- 사이드바 네비게이션 (Tier별 그룹핑)
- 이전/다음 문서 이동
- 목차(ToC) 자동 생성
- 코드 블록 구문 강조 + 복사 버튼

#### F2. 학습 경로 시각화
- Tier -1 → Tier 3 파이프라인을 인터랙티브 다이어그램으로 표현
- 각 노드 클릭 시 해당 문서로 이동
- 현재 학습 위치 하이라이트
- Mermaid + 커스텀 Vue 컴포넌트 조합

#### F3. 개념 관계도 (인터랙티브 그래프)
- 35개 개념을 D3.js force-directed 그래프로 시각화
- 노드: 개념명 + Tier 색상 코딩
- 엣지: 개념 간 의존/관계
- 인터랙션:
  - 호버: 개념 요약 툴팁
  - 클릭: 해당 문서로 이동
  - 드래그: 노드 재배치
  - 줌/팬: 전체 탐색
- Tier별 필터링

#### F4. 진도 추적
- 각 개념/섹션별 체크박스
- localStorage에 저장 (서버 불필요)
- 전체 진도율 표시 (% 바)
- 역할별 학습 경로에 따른 진도 분리 표시

#### F5. 인터랙티브 퀴즈
- 각 Tier 완료 후 이해도 점검 퀴즈
- 객관식 + 참/거짓 + 빈칸 채우기
- 즉시 피드백 (정답/해설)
- 결과 localStorage 저장

#### F6. 코드 실습 블록
- 복사 가능한 코드 스니펫
- 언어별 구문 강조 (Python, Cypher, JavaScript, Bash)
- 실행 환경 안내 (필요한 패키지, 설치 방법)
- 단계별 실습 가이드

#### F7. 검색
- VitePress 내장 MiniSearch 활용
- 전체 콘텐츠 풀텍스트 검색
- 검색 결과 하이라이트
- 한글 형태소 분석 고려

### 5.2 랜딩 페이지

#### 히어로 섹션
- 타이틀: "온톨로지 네이티브 시스템 종합 가이드"
- 서브타이틀: 핵심 메시지 (agent 시대 유일한 답)
- CTA 버튼: "학습 시작하기" → /guide

#### 컨텐츠 섹션
1. **5-Tier 시스템 오버뷰** — 각 Tier를 카드 형태로
2. **핵심 파이프라인 시각화** — Mermaid 또는 커스텀 SVG
3. **역할별 추천 경로** — AI 엔지니어 / 데이터 사이언티스트 / 백엔드 / 기획 / 입문자
4. **크레딧** — 3인 기여자

#### 푸터
- GitHub 리포지토리 링크
- Threads 링크 (3인)
- 라이선스

---

## 6. 시각화 전략

### 6.1 Mermaid 다이어그램 (마크다운 내장)
- **접근성 및 디자인**: Threads 다크/라이트 테마와 완벽히 동기화된 투명 배경, 라운드/리니어 엣지 스타일링 적용. 모바일 가독성을 고려한 멀티라인 레이아웃 최적화.
사용처:
- 5-Tier 파이프라인 흐름
- GraphRAG 6단계 인덱싱 파이프라인
- 온톨로지 5단계 설계 프로세스
- CMR 생명주기 (개발 → 폐기)
- ReBAC 관계 모델
- 레버/메타레버 구조

### 6.2 D3.js 인터랙티브 그래프
사용처:
- 35개 개념 관계도 (메인)
- 6개 분석공간 연결 다이어그램
- NOMIK 코드 지능 네트워크 (17 노드 × 23 엣지)

### 6.3 비교 테이블/차트 (Vue 컴포넌트)
사용처:
- 확률적 지능 vs 위상학적 지능 비교
- CMR Audit 건강도 차트 (레이더)
- Maturity Level 분포 (도넛/바 차트)
- Polyglot Persistence DB 비교
- 도구 스택 비교표

---

## 7. 프로젝트 구조

```
sos/
├── docs/                          ← 기존 마크다운 콘텐츠 (유지)
├── site/                          ← VitePress 프로젝트
│   ├── .vitepress/
│   │   ├── config.mts             ← VitePress 설정
│   │   ├── theme/
│   │   │   ├── index.ts           ← 커스텀 테마 진입점
│   │   │   ├── style.css          ← Threads 스타일 커스텀 CSS
│   │   │   ├── Layout.vue         ← 커스텀 레이아웃
│   │   │   └── components/
│   │   │       ├── ConceptGraph.vue    ← D3.js 개념 관계도
│   │   │       ├── LearningPath.vue    ← 학습 경로 시각화
│   │   │       ├── ProgressTracker.vue ← 진도 추적
│   │   │       ├── Quiz.vue            ← 인터랙티브 퀴즈
│   │   │       ├── ComparisonChart.vue ← 비교 차트
│   │   │       └── HeroSection.vue     ← 랜딩 히어로
│   │   └── data/
│   │       ├── concepts.json      ← 35개 개념 메타데이터
│   │       ├── relations.json     ← 개념 간 관계 데이터
│   │       ├── quizzes.json       ← 퀴즈 데이터
│   │       └── learning-paths.json ← 역할별 학습 경로
│   ├── index.md                   ← 랜딩 페이지
│   ├── overview/                  ← docs/00-overview 매핑
│   ├── foundations/               ← docs/01-foundations 매핑
│   ├── applied/                   ← docs/02-applied-foundations 매핑
│   ├── core/                      ← docs/03-core-concepts 매핑
│   ├── framework/                 ← docs/04-framework 매핑
│   ├── implementation/            ← docs/05-implementation 매핑
│   ├── writing/                   ← docs/06-writing-intelligence 매핑
│   ├── cmr/                       ← docs/07-cmr-audit 매핑
│   ├── guide/                     ← docs/08-beginner-guide 매핑
│   ├── references/                ← docs/09-references 매핑
│   ├── graph.md                   ← 개념 관계도 페이지
│   └── roadmap.md                 ← 학습 로드맵 페이지
├── v8-vs-compare-fixed.pdf        ← 원본 PDF
├── 3월 6-7일.docx                  ← 원본 docx
├── PRD.md                         ← 이 문서
├── package.json
└── README.md                      ← GitHub 리포지토리 README
```

---

## 8. 마일스톤

### M1: 프로젝트 셋업 + 기본 렌더링
- VitePress 프로젝트 초기화
- 커스텀 테마 (Threads 스타일 다크 모드)
- 기존 docs/ 마크다운 연결 및 사이드바 구성
- 기본 검색 활성화

### M2: 랜딩 페이지 + 시각화 기초
- 히어로 섹션 + 5-Tier 카드
- Mermaid 다이어그램 통합 (파이프라인, 프로세스 등)
- 비교 테이블 Vue 컴포넌트

### M3: 인터랙티브 그래프 + 학습 경로
- D3.js 35개 개념 관계도
- 학습 경로 인터랙티브 시각화
- 역할별 경로 선택 UI

### M4: 진도 추적 + 퀴즈
- localStorage 기반 체크리스트
- 진도율 표시 바
- Tier별 퀴즈 콘텐츠 작성 + 컴포넌트

### M5: 코드 실습 + 마무리
- 코드 블록 강화 (실행 가이드, 환경 안내)
- 반응형 최종 점검
- GitHub Pages 배포 설정
- README.md 작성

---

## 9. 성공 지표

| 지표 | 목표 |
|------|------|
| GitHub Stars | 출시 후 3개월 내 100+ |
| 포크 수 | 50+ |
| Lighthouse 성능 점수 | 90+ |
| 모바일 사용성 | Lighthouse Accessibility 95+ |
| 콘텐츠 커버리지 | 35개 개념 100% |
| 퀴즈 문항 수 | Tier당 최소 5문항 (총 25+) |

---

## 10. 제약사항 및 결정

- **서버리스**: 백엔드 없이 100% 정적 사이트
- **데이터 지속성**: localStorage만 사용 (계정 시스템 없음)
- **국제화**: v1은 한국어 단일 언어 (향후 확장 구조는 확보)
- **원본 파일**: PDF/docx는 리포지토리에 포함하되 사이트에서는 마크다운만 렌더링
- **라이선스**: TBD (크레딧 3인 합의 필요)
