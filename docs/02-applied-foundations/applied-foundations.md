# Tier 0: 응용기초 (Applied Foundations)

> 임베딩·시멘틱서치·RAG·지식그래프·그래프DB·LLM·베이지안·위상수학·접근제어·에이전트
> — 실무 진입점이 되는 10개 개념

---

## F01 — 임베딩 & 벡터 공간

**TL;DR**: 의미를 고차원 숫자 벡터로 표현. "비슷한 의미 → 가까운 벡터"

- 분포 가설: 함께 등장하는 단어는 비슷한 의미
- 차원: 384~4,096, HNSW 인덱스로 로그 탐색
- 쿼리 풍부화: HyDE, 쿼리 확장, Multi-Query, 청크 풍부화

## F02 — 시멘틱 서치 (Semantic Search)

**TL;DR**: BM25(키워드) + 벡터(의미) 하이브리드 서치가 표준

- 하이브리드 서치와 RRF(Reciprocal Rank Fusion)
- 리랭킹: 바이-인코더(속도) → 크로스-인코더(정밀도) 2단계 파이프라인
- 청킹 전략: 재귀적 청킹, 시맨틱 청킹, 계층적(Parent-Child) 청킹
- 시멘틱 드리프트 방지: 모델 버전별 인덱스 분리

## F03 — RAG (Retrieval-Augmented Generation)

**TL;DR**: LLM 환각을 줄이고 최신 지식 활용 — 파인튜닝의 대안

- **오프라인 파이프라인**: 문서 → 청킹 → 임베딩 → 벡터 DB 저장
- **온라인 파이프라인**: 쿼리 → 임베딩 → 검색 → 컨텍스트 조립 → LLM 생성
- **평가**: Faithfulness(충실도), Relevance(관련성), Answer Correctness
- **구조적 한계 3가지** → GraphRAG로의 전환 필요성

## F04 — 지식 그래프 (Knowledge Graph)

**TL;DR**: 엔티티(노드) + 관계(엣지) + 트리플(주어-술어-목적어)

- **트리플**: 분리 불가능한 지식의 최소 단위
- **RDF vs 프로퍼티 그래프**: RDF(연동·추론) vs Property Graph(속성 직접 첨부, Neo4j)
- **온톨로지**: TBox(개념 정의) + ABox(사실) = 완전한 지식 그래프
- **N-hop 탐색**: 깊이(depth) = 검색 품질과 비용의 핵심 파라미터

## F05 — 그래프 DB & 쿼리

**TL;DR**: 노드·엣지·속성을 네이티브 저장·탐색. Index-Free Adjacency로 깊이 탐색 비용 일정.

- Neo4j + Cypher: `MATCH (a:Person)-[:KNOWS*1..3]->(b:Person)`
- RDBMS의 재귀 JOIN(지수적 성능 저하)을 극복
- 커뮤니티 탐지, 최단경로 등 그래프 알고리즘 내장

## F06 — LLM & 프롬프트 엔지니어링

**TL;DR**: Transformer 기반 대규모 언어 모델 + 프롬프트 설계

- Multi-Head Self-Attention: `Attention(Q,K,V) = softmax(QK^T/√d_k)V`
- 프롬프트 기법: Zero-shot → Few-shot → CoT → ReAct → 복합도구 사용
- 환각 감소: RAG 연동, Self-Verification, RLHF

## F07 — 베이지안 추론

**TL;DR**: 새 증거에 따라 믿음을 업데이트 — 지식 그래프 신뢰도 전파에 직접 적용

- 베이지안 네트워크(BN): DAG 구조로 불확실성 추론
- 확률적 지능에서 구조적 지능으로의 보완: 온톨로지·KG가 구조를 명시적으로 표현

## F08 — 위상수학 기초 (Topology Basics)

**TL;DR**: 연속 변환에 불변하는 공간의 성질. TDA로 임베딩 구조적 패턴 발견.

- 위상 공간, 위상동형(Homeomorphism), 불변량
- **TDA 파이프라인**: 데이터 → 단체 복합체 → 퍼시스턴트 호몰로지 → 바코드/벡터화
- **분석 공간 = 위상**: 임베딩, 그래프, 지식 그래프 모두 위상 공간으로 해석
- 위상 디랙 연산자(Nature Physics 2025)

## F09 — 접근 제어 (Access Control)

**TL;DR**: RBAC → ABAC → **ReBAC** (관계 기반, Google Zanzibar)

- RLS(행 수준 보안): 벡터 DB + 그래프 DB 두 레이어에 적용
- JWT + 파이프라인 자동 필터: GraphRAG에서 접근 가능한 서브그래프만 탐색
- GraphRAG + ReBAC: 온톨로지 설계가 곧 접근제어 설계

## F10 — 에이전트 & 오케스트레이션

**TL;DR**: 지각 → 추론 → 행동 → 기억의 자율적 시스템

- **4대 구성요소**: 지각(Perceive), 추론(Reason), 행동(Act), 기억(Memory)
- **ReAct 패턴**: Thought → Action → Observation 사이클
- **멀티에이전트 오케스트레이션**: 순차, 분기, 라우팅, 계층(Hierarchical)
- **프랙탈 + 재귀 분해**: 서브태스크가 동일 에이전트 구조를 재귀적으로 사용
- **MCP**: Resources + Tools + Prompts로 에이전트-도구 통합
- **GraphRAG + 에이전트**: 플래너 → 검색 → 추론 → 검증 에이전트 파이프라인
