# 온톨로지 네이티브 시스템 종합 가이드

**Ontology-Native System Comprehensive Guide**

> "가장 본질로, 가장 물리적으로.. 지능을 해체해 들어가는 것만이 Agent 시대 유일한 해답입니다."

---

## 크레딧 (Credits)

| 역할 | 링크 |
|------|------|
| **교육 사이트 기획 / 콘텐츠 구성** | [@comad.j](https://www.threads.com/@comad.j) |
| **원본 세미나 자료 제공** | [@heretics_gene](https://www.threads.com/@heretics_gene) |
| **PDF 편집 / 지식베이스 구축** | [@specal1849](https://www.threads.com/@specal1849) |

### 원본 자료
- **v8-vs-compare-fixed.pdf**: 181페이지, 35개 핵심 개념, 5개 Tier 계층의 종합 지식베이스
- **3월 6-7일.docx**: 글쓰기 메타온톨로지 × 분석공간 프레임워크 + CMR(Capability Maturity Registry) 실무 예시

---

## 디렉토리 구조

```
docs/
├── README.md                      ← 이 파일 (전체 개요 + 네비게이션)
│
├── 00-overview/
│   └── executive-summary.md       ← 핵심 메시지 5가지 + 5개 Tier 로드맵 + 학습 경로
│
├── 01-foundations/                 ← Tier -1: 순수기초 (Pure Foundations)
│   └── pure-foundations.md        ← P01~P10: 확률/벡터/그래프/DB/ML/NLP/검색/트랜스포머/API/보안
│
├── 02-applied-foundations/         ← Tier 0: 응용기초 (Applied Foundations)
│   └── applied-foundations.md     ← F01~F10: 임베딩/시멘틱서치/RAG/지식그래프/그래프DB/LLM/베이지안/위상/접근제어/에이전트
│
├── 03-core-concepts/               ← Tier 1: 핵심 (Core Concepts)
│   └── core-concepts.md           ← C01~C05: GraphRAG/온톨로지/메타엣지/팔란티어AIP/위상학적지능
│
├── 04-framework/                   ← Tier 2: 프레임워크 (Framework)
│   └── framework.md               ← C06~C10: 분석공간6가지/ReBAC/메타온톨로지/도메인온톨로지/벡터풍부화
│
├── 05-implementation/              ← Tier 3: 구현 (Implementation)
│   └── implementation.md          ← C11~C15: NOMIK/FDE/레버·메타레버/물리적계산엔진/ActiveMetadata
│
├── 06-writing-intelligence/        ← 글쓰기 메타온톨로지 (docx 기반)
│   └── writing-meta-ontology.md   ← 7+1개 분석공간 × 메타엣지 × 정량적 글쓰기 지능
│
├── 07-cmr-audit/                   ← CMR & Capability Audit (docx 기반)
│   └── cmr-capability-audit.md    ← CMR 5개 예시 + Audit 로그 + 시스템 건강도
│
├── 08-beginner-guide/              ← 입문자 보완 자료 (신규 작성)
│   └── beginner-roadmap.md        ← 온톨로지 네이티브 시스템 구축을 위한 단계별 학습 가이드
│
└── 09-references/
    └── references.md              ← 핵심 논문 + 도서 + 온라인 자료 + Threads 참조
```

---

## 핵심 파이프라인 (Single Pipeline)

```
벡터 의미 풍부화(C10)
  → GraphRAG(C01)
    → 온톨로지(C02)
      → ReBAC(C07)
        → 메타온톨로지(C08)
          → 위상학적 지능(C05)
            → 팔란티어 AIP(C04)
              → 레버/메타레버(C13)
                → 물리적 계산엔진(C14)
```

---

## 역할별 추천 학습 경로

| 역할 | 추천 순서 |
|------|-----------|
| **AI 엔지니어** | Tier 0 → Tier 1 → Tier 2 → Tier 3 |
| **데이터 사이언티스트** | P01·P02 → F01 → C01 → C10 → C05 |
| **백엔드 개발자** | P04 → F05 → F09 → C07 → C04 |
| **비즈니스/기획** | C02 → C08 → C09 → C12 → C04 |
| **입문자** | `08-beginner-guide/` → Tier -1 → Tier 0 → Tier 1 순차 |
