---
layout: home
hero:
  name: "Ontology System"
  text: "온톨로지 시스템 종합 가이드"
  tagline: '"가장 본질로, 가장 물리적으로.. 지능을 해체해 들어가는 것만이 AI의 내일 입니다."'
  actions:
    - theme: brand
      text: 학습 시작하기
      link: /guide/
    - theme: alt
      text: 개요
      link: /overview/
    - theme: alt
      text: 개념 관계도
      link: /graph

features:
  - icon: 🧬
    title: "Tier -1: 순수기초"
    details: "확률·벡터·그래프·DB·ML/NLP — AI의 수학적 토대 10가지"
    link: /foundations/
    linkText: 학습하기
  - icon: 🔧
    title: "Tier 0: 응용기초"
    details: "임베딩·RAG·지식그래프·에이전트 — 실무 진입점 10가지"
    link: /applied/
    linkText: 학습하기
  - icon: 💎
    title: "Tier 1: 핵심"
    details: "GraphRAG·온톨로지·메타엣지·AIP·위상학적 지능 — 패러다임 전환"
    link: /core/
    linkText: 학습하기
  - icon: 🏗️
    title: "Tier 2: 프레임워크"
    details: "분석공간·ReBAC·메타온톨로지·벡터풍부화 — 설계 원칙"
    link: /framework/
    linkText: 학습하기
  - icon: 🚀
    title: "Tier 3: 구현"
    details: "NOMIK·FDE·레버·물리엔진·Active Metadata — 실전 배포"
    link: /implementation/
    linkText: 학습하기
  - icon: 📝
    title: "글쓰기 × 온톨로지"
    details: "7+1개 분석공간으로 정량화하는 글쓰기 메타온톨로지"
    link: /writing/
    linkText: 학습하기
---

<div class="home-content">

## 핵심 파이프라인

<div class="pipeline">
  <div class="pl-row">
    <span class="pl-node green">벡터 의미 풍부화</span>
    <span class="pl-arrow">→</span>
    <span class="pl-node purple">GraphRAG</span>
    <span class="pl-arrow">→</span>
    <span class="pl-node purple">온톨로지</span>
    <span class="pl-arrow">→</span>
    <span class="pl-node orange">ReBAC</span>
  </div>
  <div class="pl-turn">
    <span class="pl-down">↓</span>
    <span class="pl-node orange">메타온톨로지</span>
    <span class="pl-down">↓</span>
  </div>
  <div class="pl-row reverse">
    <span class="pl-node red">물리적 계산엔진</span>
    <span class="pl-arrow">←</span>
    <span class="pl-node red">레버/메타레버</span>
    <span class="pl-arrow">←</span>
    <span class="pl-node purple">팔란티어 AIP</span>
    <span class="pl-arrow">←</span>
    <span class="pl-node purple">위상학적 지능</span>
  </div>
</div>

</div>

<style>
.home-content {
  max-width: 1152px;
  margin: 0 auto;
  padding: 2rem 24px 0rem;
}

.home-content h2 {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-top: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: none;
}

/* --- Pipeline --- */
.pipeline {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  margin: 2.5rem auto;
  width: fit-content;
  background: var(--vp-c-bg-soft);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid var(--vp-c-border);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05); /* gentle shadow */
}

.dark .pipeline {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
}

.pl-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pl-turn {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  gap: 0.5rem;
  padding: 0.5rem 0;
}

.pl-node {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.pl-node:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.pl-node.green  { background: #1a3c34; color: #34d399; border: 1px solid rgba(52, 211, 153, 0.3); }
.pl-node.purple { background: #3b1f5e; color: #a78bfa; border: 1px solid rgba(167, 139, 250, 0.3); }
.pl-node.orange { background: #4a2c17; color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.3); }
.pl-node.red    { background: #4a1717; color: #f87171; border: 1px solid rgba(248, 113, 113, 0.3); }

/* In Light mode, override nodes for readability */
:root:not(.dark) .pl-node.green { background: #ecfdf5; color: #059669; border: 1px solid #6ee7b7; box-shadow: none; }
:root:not(.dark) .pl-node.purple { background: #f5f3ff; color: #7c3aed; border: 1px solid #c4b5fd; box-shadow: none; }
:root:not(.dark) .pl-node.orange { background: #fffbeb; color: #d97706; border: 1px solid #fcd34d; box-shadow: none; }
:root:not(.dark) .pl-node.red { background: #fef2f2; color: #dc2626; border: 1px solid #fca5a5; box-shadow: none; }

.pl-arrow, .pl-down {
  color: var(--vp-c-text-3);
  font-size: 1.3rem;
  font-weight: 300;
}

@media (max-width: 768px) {
  .home-content h2 {
    font-size: 1.5rem;
    margin-top: 3rem;
  }
  .pipeline {
    padding: 1.5rem;
  }
  .pl-row {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  .pl-node {
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
    width: 140px;
  }
}
</style>
