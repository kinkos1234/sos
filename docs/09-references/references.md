# 참고 자료 (References)

---

## 크레딧

| 역할 | 링크 | 설명 |
|------|------|------|
| **교육 사이트 기획·콘텐츠 구성** | [@comad.j](https://www.threads.com/@comad.j) | 원본 자료를 활용한 교육 사이트 구축, 입문자 가이드 보완 및 전체 콘텐츠 구성 |
| **세미나 원본 자료** | [@heretics_gene](https://www.threads.com/@heretics_gene) | GraphRAG/AI Pipeline 세미나 발표자. 온톨로지·위상학적 지능·메타엣지·분석공간 등 핵심 개념의 원저자 |
| **PDF 편집·지식베이스 구축** | [@specal1849](https://www.threads.com/@specal1849) | 세미나 내용을 181페이지 종합 지식베이스(v8-vs-compare-fixed.pdf)로 체계화 |

> 세 Threads 계정을 팔로우하면 온톨로지 네이티브 시스템에 대한 최신 통찰과 실무 적용 사례를 지속적으로 확인할 수 있습니다.

---

## 핵심 논문

| # | 저자/출처 | 제목 | 핵심 내용 |
|---|----------|------|-----------|
| 1 | Edge et al., 2024 | From Local to Global: A Graph RAG Approach to Query-Focused Summarization | GraphRAG 핵심 논문 — 커뮤니티 탐지 + 맵-리듀스 검색 |
| 2 | Vaswani et al., 2017 | Attention Is All You Need | Transformer 아키텍처 원논문 |
| 3 | Pang et al., 2019 | Zanzibar: Google's Consistent, Global Authorization System | Google 전역 인가 시스템 — ReBAC의 기반 |
| 4 | Gruber, 1993 | A Translation Approach to Portable Ontology Specifications | 온톨로지의 정의 원논문 |
| 5 | DRIFT, 2024.10 | Dynamic Reasoning and Inference with Flexible Traversal | GraphRAG 동적 탐색 확장 |
| 6 | Nature Physics, 2025 | Topological Dirac Operator | 위상 디랙 연산자 — AI 위상학적 분석 핵심 도구 |

---

## 공식 문서

| # | 출처 | 문서 | 내용 |
|---|------|------|------|
| 1 | Palantir | Foundry Documentation | 온톨로지 레이어, Pipeline Builder |
| 2 | Palantir | AIP Documentation | AIP Logic, Agent Studio, LLM 통합 |
| 3 | Anthropic | Model Context Protocol (MCP) Specification | AI 에이전트 표준 통신 프로토콜 |
| 4 | LangChain | LangChain Documentation | LLM 체인, 에이전트, RAG 파이프라인 |
| 5 | OpenAI | API Documentation | GPT 모델, Embeddings API |
| 6 | W3C | OWL 2 Web Ontology Language | 온톨로지 표준 명세 (2012) |
| 7 | Neo4j | Graph Database Documentation | Cypher 쿼리, 그래프 알고리즘 |

---

## 도서

| # | 저자 | 제목 | 관련 내용 |
|---|------|------|-----------|
| 1 | Russell & Norvig | Artificial Intelligence: A Modern Approach | 지식 표현, 온톨로지, 추론 |
| 2 | Allemang & Hendler | Semantic Web for the Working Ontologist | RDF, OWL, SPARQL, 온톨로지 설계 |
| 3 | Needham & Hodler | Graph Algorithms (O'Reilly) | 커뮤니티 탐지, 중심성, 그래프 분석 |
| 4 | Kleppmann | Designing Data-Intensive Applications | 분산 시스템, 데이터 파이프라인 |
| 5 | Baader et al. | The Description Logic Handbook | 기술 논리, 온톨로지 추론, OWL 형식적 기반 |

---

## 온라인 자료

| # | 저자/출처 | 제목 | 내용 |
|---|----------|------|------|
| 1 | Microsoft | GraphRAG GitHub Repository | GraphRAG 공식 구현체 |
| 2 | Palantir | Ontology Layer 설계 철학 블로그 | Foundry 통합 전략 |
| 3 | Anthropic | MCP 설계 배경 블로그 | MCP 표준 프로토콜 발표 |
| 4 | Chip Huyen, 2023 | Building LLM Applications for Production | LLM 시스템 설계, 평가, 배포 |
| 5 | Eugene Yan, 2023 | Patterns for Building LLM-based Systems & Products | RAG, 에이전트, HitL 패턴 |
| 6 | Lilian Weng, 2023 | LLM Powered Autonomous Agents | 에이전트 설계, 메모리, 오케스트레이션 |
| 7 | Weights & Biases | RAG in Production | 청킹, 임베딩, 검색 실무 |

---

## 실습 도구 체인

### 필수 설치
```bash
# 그래프 DB
# Neo4j Desktop: https://neo4j.com/download/

# Python 패키지
pip install langchain chromadb neo4j sentence-transformers openai
pip install graphrag  # Microsoft GraphRAG

# MCP
npm install @anthropic-ai/sdk  # Anthropic SDK
```

### 추천 학습 순서 (도구 기준)
1. **Neo4j Desktop** → Cypher 기초 → 지식 그래프 체험
2. **ChromaDB** → 벡터 저장/검색 → RAG 기초 체험
3. **LangChain** → RAG 파이프라인 구축
4. **Microsoft GraphRAG** → 지식 그래프 기반 RAG 전환
5. **OpenFGA** → ReBAC 접근제어 구현
6. **MCP SDK** → 에이전트-도구 통합
