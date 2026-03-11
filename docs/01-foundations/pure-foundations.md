# Tier -1: 순수기초 (Pure Foundations)

> 확률·벡터·그래프·데이터베이스·ML·NLP·정보검색·트랜스포머·API 아키텍처·보안
> — AI 지능 체계의 수학적·공학적 토대를 다루는 10개 개념

---

## P01 — 확률과 통계 (Probability & Statistics)

**TL;DR**: 확률과 통계는 불확실성을 수학적으로 다루는 언어. LLM이 다음 토큰을 예측하는 원리 자체가 조건부 확률의 연쇄.

### 핵심 개념
- **베이즈 정리**: `P(H|E) = P(E|H) × P(H) / P(E)` — 모든 ML 모델이 하는 일은 결국 베이즈 정리의 반복
- **확률분포와 ML**: 정규분포(가중치 초기화), 다항분포(토큰 분포)
- **MLE와 MAP**: MLE = 데이터를 가장 잘 설명하는 파라미터, MAP = MLE + 사전분포(정규화)
- **정보이론과 Softmax**: 엔트로피, 교차 엔트로피(분류 손실함수), Temperature 파라미터

### 연결 고리
- → F07(베이지안 추론), F01(임베딩)
- ↔ P02(벡터수학)

---

## P02 — 벡터 수학 기초 (Vector Mathematics)

**TL;DR**: 벡터 수학은 AI가 "의미"를 숫자로 다루는 언어. "왕 - 남자 + 여자 = 여왕"이 가능한 이유.

### 핵심 개념
- **내적과 코사인 유사도**: `cos_sim(A,B) = (A·B) / (|A|×|B|)` — 방향이 의미, 크기는 빈도
- **임베딩과 의미 산술**: Word2Vec → GloVe → BERT/ELMo → Sentence Transformers
- **차원 축소**: PCA(선형), t-SNE(비선형, 클러스터), UMAP(빠르고 전역 구조 보존)

### 연결 고리
- → F01(임베딩), F02(시멘틱서치)
- ↔ P01(확률통계), P08(트랜스포머 QKV 어텐션)

---

## P03 — 그래프 이론 기초 (Graph Theory)

**TL;DR**: 사물 간의 관계를 수학적으로 모델링. 노드(Node) = 사물, 엣지(Edge) = 관계.

### 핵심 개념
- **그래프 기본**: `G = (V, E)`, Triple(주어-술어-목적어), 방향/무방향/가중 그래프
- **BFS vs DFS**: BFS(최단 경로), DFS(사이클 감지, 위상 정렬)
- **Hop과 Depth**: 1-Hop = 엣지 1개 — N-hop 설정이 시스템 설계의 핵심 트레이드오프
- **DAG(방향 비순환 그래프)**: 온톨로지 계층, Git 히스토리, 데이터 파이프라인

### 연결 고리
- → F04(지식그래프), F05(그래프 DB)
- ↔ P04(데이터베이스)

---

## P04 — 데이터베이스 기초 (Database Fundamentals)

**TL;DR**: RDBMS(SQL, ACID)와 NoSQL(유연 스키마) 두 갈래. 그래프 DB는 관계 중심 특화 처리.

### 핵심 개념
- **RDBMS**: 테이블·행·열, PK/FK, JOIN, 정규화, B-Tree/Hash 인덱스
- **ACID**: Atomicity, Consistency, Isolation, Durability (vs BASE)
- **NoSQL 유형**: 키-값(Redis), 문서(MongoDB), 그래프(Neo4j), 벡터(Pinecone)
- **그래프 DB**: Index-Free Adjacency → 깊이 탐색 비용 일정, Cypher 쿼리

### Polyglot Persistence
핵심 거래=PostgreSQL, 캐시=Redis, 검색=Elasticsearch, 관계 탐색=Neo4j

---

## P05 — AI/ML 기초 (AI/ML Fundamentals)

**TL;DR**: 데이터로부터 패턴을 학습해 예측하는 시스템.

### 핵심 개념
- **3대 패러다임**: 지도학습(Next Token Prediction), 비지도학습(임베딩 학습), 강화학습(RLHF)
- **신경망과 역전파**: `h = f(Wx + b)`, Chain Rule로 그래디언트 계산
- **손실함수·최적화**: MSE(회귀), Cross-Entropy(분류), Adam Optimizer
- **편향-분산 트레이드오프**: 과소적합 ↔ 과적합, 정규화·드롭아웃으로 관리

---

## P06 — NLP 기초 (Natural Language Processing)

**TL;DR**: 컴퓨터가 인간 언어를 이해하고 생성하는 AI 핵심 분야.

### 핵심 개념
- **토큰화**: BPE(GPT), WordPiece(BERT), SentencePiece(T5)
- **워드 임베딩**: Word2Vec(분포 가설) → Sentence Transformers(RAG 최적화)
- **어텐션 메커니즘**: RNN/LSTM 한계 극복, Query-Key-Value 구조 → Self-Attention

---

## P07 — 정보검색 (Information Retrieval)

**TL;DR**: 역색인(Inverted Index) + BM25가 핵심. RAG는 이 기술 위에 세워진다.

### 핵심 개념
- **역색인**: "단어 → 문서" 방향의 색인 — 검색의 핵심 자료구조
- **TF-IDF와 BM25**: 단어 빈도·역문서 빈도 기반 관련성 점수
- **하이브리드 검색**: BM25(키워드) + 벡터(의미) 결합

---

## P08 — 트랜스포머 (Transformer Architecture)

**TL;DR**: "Attention is All You Need" — BERT, GPT, Claude 등 모든 현대 LLM의 공통 뼈대.

### 핵심 개념
- **Multi-Head Self-Attention**: `Attention(Q,K,V) = softmax(QK^T/√d_k)V`
- **위치 인코딩**: 순서 정보를 임베딩에 추가
- **BERT vs GPT**: 양방향 인코더 vs 자기회귀 디코더

---

## P09 — API 아키텍처 (API Architecture)

**TL;DR**: REST, 이벤트 드리븐, MCP(Model Context Protocol)

### 핵심 개념
- **REST API**: 자원 중심, HTTP 메서드, 상태 코드
- **이벤트 드리븐**: Pub/Sub, 비동기 통신, 느슨한 결합
- **MCP**: Anthropic 발표, AI 에이전트-외부 시스템 표준 연결 프로토콜
- **팔란티어**: Foundry(데이터) + AIP(AI) + Apollo(배포)

> "하나의 기업 = 하나의 거대한 MCP 서버"

---

## P10 — 보안 기초 (Security Fundamentals)

**TL;DR**: 인증(AuthN) + 인가(AuthZ) + 감사(Audit)

### 핵심 개념
- **인증·인가**: OAuth 2.0, JWT
- **접근 제어 진화**: RBAC → ABAC → **ReBAC(관계 기반)**
- **Zero Trust**: 경계가 사라진 시대의 기본값
- **GraphRAG + ReBAC**: 문서 노드 간 관계(그래프 엣지)로 접근 권한 제어
