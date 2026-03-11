# Tier -1: 순수기초 (Pure Foundations)

> 확률·벡터·그래프·데이터베이스·ML·NLP·정보검색·트랜스포머·API 아키텍처·보안
> — AI 지능 체계의 수학적·공학적 토대를 다루는 10개 개념

---

## P01 — 확률과 통계 (Probability & Statistics)

**TL;DR**: 확률과 통계는 불확실성을 수학적으로 다루는 언어. LLM이 다음 토큰을 예측하는 원리 자체가 조건부 확률의 연쇄.

### 한 문장 요약

AI가 다음 단어를 고르는 모든 순간에 확률이 작동한다.

### 왜 이것이 필요한가

날씨 예보처럼 AI도 확실한 답이 아니라 가능성을 계산한다. LLM이 "오늘 날씨는 ___"의 빈칸에 "맑음"을 넣을지 "흐림"을 넣을지 결정하는 것이 바로 확률 분포에서의 샘플링이다. temperature, top-p 같은 파라미터가 이 확률 분포를 조절한다.

베이즈 정리는 새로운 증거가 주어졌을 때 기존 믿음을 갱신하는 방법으로, GraphRAG에서 커뮤니티 정보가 추가될 때 검색 결과의 신뢰도를 업데이트하는 데 활용된다.

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

### 한 문장 요약

AI는 모든 의미를 숫자 배열(벡터)로 변환해서 비교한다.

### 왜 이것이 필요한가

GPS 좌표로 두 장소의 거리를 계산하듯, AI는 문장을 벡터로 변환하여 의미적 거리를 측정한다. "king - man + woman = queen"이라는 유명한 예시는 벡터 공간에서 의미적 관계가 수학적 연산으로 표현된다는 것을 보여준다.

이것이 바로 임베딩의 원리이며, 시멘틱 서치와 RAG의 수학적 토대다.

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

### 한 문장 요약

그래프는 사물과 관계를 지도처럼 표현하는 수학이다.

### 왜 이것이 필요한가

지하철 노선도를 떠올려보자. 역(노드)과 노선(엣지)으로 구성되고, A역에서 B역까지 가는 최적 경로를 찾는 것이 그래프 탐색이다. 온톨로지, 지식 그래프, GraphRAG는 모두 이 그래프 이론 위에 세워진다.

Leiden 알고리즘이 그래프에서 커뮤니티를 발견하는 것도, Neo4j가 관계를 탐색하는 것도 결국 그래프 이론이다.

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

### 한 문장 요약

데이터를 어디에 어떻게 저장하느냐가 AI 시스템의 성능을 결정한다.

### 왜 이것이 필요한가

도서관에서 책을 저자별로 정리하면 저자 검색은 빠르지만 주제 연결은 어렵다. 이것이 관계형 DB의 한계다. 그래프 DB(Neo4j)는 연결 자체를 1등 시민으로 다루므로 "이 저자와 공동 작업한 모든 사람"을 한 번에 찾을 수 있다.

실무에서는 용도에 따라 여러 DB를 조합하는 Polyglot Persistence가 필수다.

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

### 한 문장 요약

머신러닝은 데이터에서 패턴을 스스로 찾아내는 프로그래밍 방식이다.

### 왜 이것이 필요한가

전통적 프로그래밍은 "IF 비가 오면 THEN 우산을 가져가라"처럼 규칙을 사람이 직접 작성한다. ML은 과거 날씨와 우산 사용 데이터에서 패턴을 스스로 발견한다. LLM은 이 원리의 극단적 확장으로, 수조 개의 텍스트에서 언어 패턴을 학습한 모델이다.

가끔 "환각"이 생기는 이유도 패턴 매칭이 틀릴 수 있기 때문이다.

### 핵심 개념
- **3대 패러다임**: 지도학습(Next Token Prediction), 비지도학습(임베딩 학습), 강화학습(RLHF)
- **신경망과 역전파**: `h = f(Wx + b)`, Chain Rule로 그래디언트 계산
- **손실함수·최적화**: MSE(회귀), Cross-Entropy(분류), Adam Optimizer
- **편향-분산 트레이드오프**: 과소적합 ↔ 과적합, 정규화·드롭아웃으로 관리

---

## P06 — NLP 기초 (Natural Language Processing)

**TL;DR**: 컴퓨터가 인간 언어를 이해하고 생성하는 AI 핵심 분야.

### 한 문장 요약

NLP는 컴퓨터가 인간의 언어를 읽고, 이해하고, 생성하는 기술이다.

### 왜 이것이 필요한가

컴퓨터는 본래 숫자만 처리할 수 있다. NLP의 핵심 돌파구는 단어를 숫자로 변환하는 것(토큰화 → 임베딩)이었다.

이 과정을 이해해야 "왜 같은 질문이라도 표현 방식에 따라 AI 답변이 달라지는가", "왜 벡터 의미 풍부화(C10)가 필요한가"를 파악할 수 있다.

### 핵심 개념
- **토큰화**: BPE(GPT), WordPiece(BERT), SentencePiece(T5)
- **워드 임베딩**: Word2Vec(분포 가설) → Sentence Transformers(RAG 최적화)
- **어텐션 메커니즘**: RNN/LSTM 한계 극복, Query-Key-Value 구조 → Self-Attention

---

## P07 — 정보검색 (Information Retrieval)

**TL;DR**: 역색인(Inverted Index) + BM25가 핵심. RAG는 이 기술 위에 세워진다.

### 한 문장 요약

검색 엔진이 수십억 문서에서 원하는 정보를 찾아내는 핵심 원리다.

### 왜 이것이 필요한가

RAG의 'R'(Retrieval)이 바로 정보검색이다. BM25는 키워드 기반, 벡터 검색은 의미 기반인데, 실무에서는 둘을 결합한 하이브리드 검색이 최선이다.

이것을 이해하지 못하면 "왜 RAG가 가끔 엉뚱한 문서를 가져오는가"를 진단할 수 없다.

### 핵심 개념
- **역색인**: "단어 → 문서" 방향의 색인 — 검색의 핵심 자료구조
- **TF-IDF와 BM25**: 단어 빈도·역문서 빈도 기반 관련성 점수
- **하이브리드 검색**: BM25(키워드) + 벡터(의미) 결합

---

## P08 — 트랜스포머 (Transformer Architecture)

**TL;DR**: "Attention is All You Need" — BERT, GPT, Claude 등 모든 현대 LLM의 공통 뼈대.

### 한 문장 요약

ChatGPT, Claude 등 모든 현대 AI의 공통 뼈대가 되는 아키텍처다.

### 왜 이것이 필요한가

읽기 시험을 볼 때 핵심 문장에 형광펜을 치는 것처럼, 트랜스포머의 어텐션 메커니즘은 입력에서 가장 중요한 부분에 집중한다.

이 아키텍처 덕분에 AI가 긴 문서도 이해할 수 있게 되었고, GraphRAG의 엔티티 추출과 커뮤니티 요약도 이 트랜스포머 위에서 작동한다.

### 핵심 개념
- **Multi-Head Self-Attention**: `Attention(Q,K,V) = softmax(QK^T/√d_k)V`
- **위치 인코딩**: 순서 정보를 임베딩에 추가
- **BERT vs GPT**: 양방향 인코더 vs 자기회귀 디코더

---

## P09 — API 아키텍처 (API Architecture)

**TL;DR**: REST, 이벤트 드리븐, MCP(Model Context Protocol)

### 한 문장 요약

서로 다른 시스템이 대화하는 방법을 정의하는 통신 규약이다.

### 왜 이것이 필요한가

외부 도구를 호출할 수 없는 AI는 그냥 챗봇이다. API가 있어야 에이전트가 웹을 검색하고, DB를 쿼리하고, 행동을 취할 수 있다.

MCP(Model Context Protocol)는 이를 표준화한 것으로, USB가 기기 연결을 통일한 것처럼 에이전트-도구 통합을 통일한다.

### 핵심 개념
- **REST API**: 자원 중심, HTTP 메서드, 상태 코드
- **이벤트 드리븐**: Pub/Sub, 비동기 통신, 느슨한 결합
- **MCP**: Anthropic 발표, AI 에이전트-외부 시스템 표준 연결 프로토콜
- **팔란티어**: Foundry(데이터) + AIP(AI) + Apollo(배포)

> "하나의 기업 = 하나의 거대한 MCP 서버"

---

## P10 — 보안 기초 (Security Fundamentals)

**TL;DR**: 인증(AuthN) + 인가(AuthZ) + 감사(Audit)

### 한 문장 요약

누가 무엇에 접근할 수 있는지를 제어하는 시스템의 면역 체계다.

### 왜 이것이 필요한가

접근제어 없는 AI 시스템은 위험하다. GraphRAG가 모든 문서를 탐색할 수 있다면 기밀 정보가 누출된다.

ReBAC는 접근제어를 온톨로지 그래프 위에 직접 표현하여, 검색 구조와 보안 구조를 하나로 통합한다. 이것이 "온톨로지 = 검색 구조 = 접근제어 구조"라는 핵심 통찰의 기초다.

### 핵심 개념
- **인증·인가**: OAuth 2.0, JWT
- **접근 제어 진화**: RBAC → ABAC → **ReBAC(관계 기반)**
- **Zero Trust**: 경계가 사라진 시대의 기본값
- **GraphRAG + ReBAC**: 문서 노드 간 관계(그래프 엣지)로 접근 권한 제어

---

## 이해도 점검

<script setup>
import Quiz from '../.vitepress/theme/components/Quiz.vue'
import quizData from '../.vitepress/theme/data/quizzes.json'
</script>

<Quiz :title="quizData.foundations.title" :questions="quizData.foundations.questions" />
