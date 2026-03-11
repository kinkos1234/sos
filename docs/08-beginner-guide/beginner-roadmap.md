# 입문자를 위한 온톨로지 네이티브 시스템 구축 로드맵

> 교육 사이트 기획 / 콘텐츠 구성: [@comad.j](https://www.threads.com/@comad.j)
> 원본 세미나 자료: [@heretics_gene](https://www.threads.com/@heretics_gene)
> PDF 편집: [@specal1849](https://www.threads.com/@specal1849)
>
> 이 가이드는 위 자료들을 기반으로, 입문자가 실제로 온톨로지 네이티브 시스템을 구축할 수 있도록 보완한 단계별 학습 경로입니다.

---

## Phase 0: 왜 온톨로지인가? (1주)

### 먼저 이해해야 할 핵심 질문
> "Agent가 지식을 다루는 가장 본질적인 방법에 해당하는 'Ontology'를 다루지 않으면, 5년 후의 경쟁환경에서, 경쟁하는것이 물리적으로 가능할것인가?"

### 읽어야 할 것
- 본 자료의 `00-overview/executive-summary.md` 전체
- [@heretics_gene](https://www.threads.com/@heretics_gene) 스레드에서 온톨로지/GraphRAG 관련 포스트 탐색
- [@specal1849](https://www.threads.com/@specal1849) 스레드에서 정리된 개념 자료 확인

### 핵심 개념 3개만 먼저 잡기
1. **온톨로지** = 세계에 무엇이 존재하는가를 형식적으로 명시한 지식 구조
2. **GraphRAG** = 문서를 지식 그래프로 변환 + 커뮤니티 기반 검색
3. **메타온톨로지** = 온톨로지를 만드는 방법에 대한 온톨로지

---

## Phase 1: 수학·공학 기초 다지기 (2~4주)

> 참조: `01-foundations/pure-foundations.md`

### 필수 기초 (최소 이해 수준)

#### 1-1. 벡터와 임베딩 (P02)
- **왜**: AI가 의미를 다루는 모든 방법의 수학적 토대
- **학습 자료**:
  - 3Blue1Brown "Essence of Linear Algebra" (YouTube 시리즈)
  - Jay Alammar "The Illustrated Word2Vec" (블로그)
- **실습**: Python에서 `numpy`로 코사인 유사도 직접 계산

#### 1-2. 그래프 이론 기초 (P03)
- **왜**: 온톨로지와 지식 그래프의 수학적 뼈대
- **학습 자료**:
  - NetworkX 공식 튜토리얼 (Python 그래프 라이브러리)
  - "Graph Theory" Khan Academy 또는 MIT OCW
- **실습**: NetworkX로 간단한 그래프 생성, BFS/DFS 구현, 시각화

#### 1-3. 데이터베이스 기초 (P04)
- **왜**: Polyglot Persistence — 적재적소에 맞는 DB 선택
- **학습 자료**:
  - PostgreSQL 공식 튜토리얼
  - Neo4j "Getting Started" 가이드 + Cypher 기초
- **실습**: Neo4j Desktop 설치 → 간단한 노드/엣지 생성 → Cypher 쿼리

#### 1-4. ML/NLP 기본 (P05, P06)
- **왜**: LLM이 작동하는 원리 이해
- **학습 자료**:
  - Andrej Karpathy "Neural Networks: Zero to Hero" (YouTube)
  - Hugging Face NLP Course (무료)
- **핵심**: 토큰화 → 임베딩 → 어텐션 메커니즘 흐름만 이해

---

## Phase 2: 응용 기초 — RAG와 지식 그래프 (3~4주)

> 참조: `02-applied-foundations/applied-foundations.md`

### 2-1. 임베딩과 벡터 검색 (F01, F02)
- **실습 도구**: OpenAI Embeddings API 또는 Sentence Transformers
- **해볼 것**:
  ```python
  # 1. 문장 리스트를 임베딩으로 변환
  # 2. 코사인 유사도로 가장 비슷한 문장 찾기
  # 3. ChromaDB 또는 Pinecone에 저장 후 검색
  ```

### 2-2. RAG 파이프라인 구축 (F03)
- **도구**: LangChain 또는 LlamaIndex
- **해볼 것**:
  1. PDF 문서 로드 → 청킹 → 임베딩 → 벡터 DB 저장
  2. 쿼리 → 검색 → LLM 응답 생성
  3. Naive RAG의 한계를 직접 체감 (멀티홉 질문으로 테스트)

### 2-3. 지식 그래프 구축 (F04, F05)
- **도구**: Neo4j + Python neo4j-driver
- **해볼 것**:
  1. 간단한 도메인(예: 영화-배우-감독)의 트리플 정의
  2. Neo4j에 노드/엣지 생성
  3. Cypher로 N-hop 탐색 쿼리 작성
  4. 시각화 (Neo4j Browser)

### 2-4. LLM 프롬프트 엔지니어링 (F06)
- **해볼 것**:
  - Zero-shot → Few-shot → Chain-of-Thought 순차 적용
  - 동일 질문에 대한 응답 품질 비교

### 2-5. 에이전트 기초 (F10)
- **도구**: LangChain Agent 또는 Claude Tool Use
- **해볼 것**: ReAct 패턴으로 도구 호출하는 간단한 에이전트 구축

---

## Phase 3: 온톨로지 설계 + GraphRAG 구축 (4~6주)

> 참조: `03-core-concepts/core-concepts.md`, `04-framework/framework.md`

### 3-1. 도메인 온톨로지 설계 (C02, C09)

**5단계 프로세스를 직접 수행:**

1. **범위 설정**: 자신의 업무/관심 도메인에서 구체적 업무 흐름 선택
   - 좋은 예: "고객 문의 접수부터 해결까지"
   - 나쁜 예: "전체 고객 서비스"

2. **재료 수집**: 해당 도메인의 핵심 개념 나열
   - 질문 패턴: "이 도메인에서 가장 중요한 판단 기준은?"
   - "예외 상황은 어떤 것이 있는가?" (예외가 중요한 온톨로지 재료)

3. **구조화**: 클래스·속성·관계·규칙으로 분류
   ```
   [클래스]  고객, 주문, 제품, 반품정책
   [속성]    고객.등급, 주문.금액, 제품.카테고리
   [관계]    고객 -PLACED-> 주문, 주문 -CONTAINS-> 제품
   [규칙]    IF 고객.등급="VIP" AND 주문.일수<30 THEN 반품.승인=자동
   ```

4. **검증**: AI 프롬프트에 온톨로지 주입 → 응답 품질 비교
5. **정제**: 오류 역추적 → 온톨로지 수정 → 반복

### 3-2. GraphRAG 파이프라인 구축 (C01)

- **도구**: Microsoft GraphRAG 또는 직접 구축
- **단계**:
  1. 문서 청킹 (600토큰, 100 오버랩)
  2. LLM으로 엔티티·관계 추출
  3. Neo4j에 그래프 구축
  4. Leiden 알고리즘으로 커뮤니티 탐지
  5. 커뮤니티별 LLM 요약 생성
  6. 로컬(hop 기반) + 글로벌(맵-리듀스) 검색 구현

### 3-3. 메타엣지 이해와 적용 (C03)
- **핵심 질문**: "이 시스템에서 '관계를 정의하는 규칙'은 무엇인가?"
- DB 외래키 제약, API 인증 규칙, 코드 인터페이스 → 이것들이 메타엣지
- 자신의 도메인 온톨로지에서 메타엣지 3개 이상 식별

### 3-4. 벡터 의미 풍부화 (C10)
- 프롬프트의 의도-표현 갭을 직접 체감
- 유사단어 확장 → 의미 다층화 → 온톨로지 정렬 3단계 구현

---

## Phase 4: 보안과 거버넌스 통합 (2~3주)

> 참조: `04-framework/framework.md` — C07 ReBAC

### 4-1. ReBAC 기본 구현
- **도구**: Supabase RLS + 관계 테이블 또는 OpenFGA
- **해볼 것**:
  1. 사용자-팀-문서 관계 모델링
  2. "이 사용자가 이 문서에 접근할 수 있는가?" → 관계 경로 탐색으로 판정
  3. GraphRAG 검색에 RLS 필터 적용

### 4-2. 온톨로지 = 검색 구조 = 접근제어 구조
- 하나의 온톨로지로 세 가지 역할이 동시에 작동하는지 확인

---

## Phase 5: 실무 구현 패턴 (지속)

> 참조: `05-implementation/implementation.md`

### 5-1. "Search before code" 패턴
- 코드를 작성하기 전에 기존 온톨로지/지식 그래프를 먼저 검색
- NOMIK 스타일: 코드베이스를 그래프로 변환하여 AI에게 관계 정보 제공

### 5-2. 파이프라인 레버/메타레버 설계
- 자신의 AI 파이프라인에 대해 질문:
  - 레버(파이프라인)가 실패하면 누가 감지하는가?
  - 메타레버(오케스트레이션)가 있는가?

### 5-3. CMR 도입
- 참조: `07-cmr-audit/cmr-capability-audit.md`
- 자신의 시스템 capability를 1-5 단계로 추적 시작

---

## Phase 6: 6가지 분석공간으로 사고 확장 (지속)

> 참조: `04-framework/framework.md` — C06

### 모든 문제에 6개 질문을 던져라

| # | 공간 | 질문 |
|---|------|------|
| 1 | 계층 | "이것은 어느 수준에 있는가?" |
| 2 | 시간 | "이것은 언제, 어떤 리듬으로 발생하는가?" |
| 3 | 재귀 | "이것은 자기 자신을 어떻게 참조하는가?" |
| 4 | 구조 | "개념 간 관계 구조는 어떠한가?" |
| 5 | 인과 | "이것은 무엇 때문에 발생하는가?" |
| 6 | 다중 | "이것은 다른 공간들과 어떻게 연결되는가?" |

---

## 추천 도구 스택 (2026년 기준)

| 카테고리 | 추천 도구 | 용도 |
|---------|----------|------|
| 그래프 DB | Neo4j Community | 지식 그래프 저장·쿼리 |
| 벡터 DB | ChromaDB / Pinecone | 임베딩 저장·시멘틱 검색 |
| RDBMS | PostgreSQL + Supabase | 메타데이터·RLS |
| LLM | Claude / GPT-4 | 엔티티 추출·요약·생성 |
| 프레임워크 | LangChain / LlamaIndex | RAG 파이프라인 |
| GraphRAG | Microsoft GraphRAG | 지식 그래프 기반 RAG |
| 에이전트 | Claude Tool Use / CrewAI | 멀티에이전트 오케스트레이션 |
| MCP | Anthropic MCP SDK | 에이전트-도구 통합 |
| 접근제어 | OpenFGA / Supabase RLS | ReBAC 구현 |
| 모니터링 | LangSmith / Ragas | RAG 평가·최적화 |

---

## 학습 자료 추가 보완

### 온톨로지 기초
- **Protégé** (Stanford): OWL 온톨로지 편집기 — 시각적으로 클래스/관계 설계 체험
- Tom Gruber 원논문 "A Translation Approach to Portable Ontology Specifications" (1993)
- W3C OWL 2 Web Ontology Language Primer

### GraphRAG
- Microsoft GraphRAG 논문: "From Local to Global: A Graph RAG Approach" (Edge et al., 2024)
- Microsoft GraphRAG GitHub 리포지토리 — 직접 실행 가능
- DRIFT 논문: "Dynamic Reasoning and Inference with Flexible Traversal" (2024.10)

### 위상수학과 TDA
- "Topological Data Analysis for Beginners" (YouTube: Applied Algebraic Topology)
- Ripser 라이브러리: Python으로 Persistent Homology 계산
- Gudhi 라이브러리: TDA 파이프라인 구축

### 접근제어 (ReBAC)
- Google Zanzibar 논문: "Zanzibar: Google's Consistent, Global Authorization System" (2019)
- OpenFGA 공식 문서 (Google Zanzibar의 오픈소스 구현)
- Supabase Row Level Security 가이드

### MCP (Model Context Protocol)
- Anthropic MCP 공식 사양: https://modelcontextprotocol.io
- Claude Code에서 MCP 서버 구축 가이드

### 팔란티어 아키텍처 참조
- Palantir Foundry 공식 문서
- Palantir AIP 데모 영상 (YouTube)
- Alex Karp CEO 인터뷰/프레젠테이션 (비즈니스 컨텍스트)

---

## 핵심 마인드셋

1. **"Search before code"** — 코딩 전에 기존 지식을 먼저 검색하라
2. **70% 완성도로 시작** — 처음부터 완벽한 온톨로지는 존재하지 않는다
3. **메타엣지를 의식하라** — "이 관계를 정의하는 규칙이 뭔가?"
4. **6개 분석공간으로 사고하라** — 물리적 계산엔진 없이도 활용 가능
5. **복리로 축적하라** — 도메인 온톨로지 → 메타온톨로지 → Universal Principals
