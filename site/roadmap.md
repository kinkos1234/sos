---
title: 학습 로드맵
aside: false
pageClass: custom-wide-page
---

<script setup>
import LearningPath from './.vitepress/theme/components/LearningPath.vue'
</script>

# 학습 로드맵

역할에 맞는 학습 순서를 선택하세요. 각 단계를 클릭하면 해당 문서로 이동합니다.

<LearningPath />

---

## 전체 파이프라인

```mermaid
graph TD
    subgraph T1["&nbsp;&nbsp;Tier -1: 순수기초&nbsp;&nbsp;"]
        P01["&nbsp;&nbsp;P01 확률&nbsp;&nbsp;"]
        P02["&nbsp;&nbsp;P02 벡터&nbsp;&nbsp;"]
        P03["&nbsp;&nbsp;P03 그래프&nbsp;&nbsp;"]
        P04["&nbsp;&nbsp;P04 DB&nbsp;&nbsp;"]
        P05["&nbsp;&nbsp;P05 ML&nbsp;&nbsp;"]
        P06["&nbsp;&nbsp;P06 NLP&nbsp;&nbsp;"]
        P07["&nbsp;&nbsp;P07 IR&nbsp;&nbsp;"]
        P08["&nbsp;&nbsp;&nbsp;P08 트랜스포머&nbsp;&nbsp;&nbsp;"]
        P09["&nbsp;&nbsp;P09 API&nbsp;&nbsp;"]
        P10["&nbsp;&nbsp;P10 보안&nbsp;&nbsp;"]

        P01 --- P02 --- P03 --- P04 --- P05
        P06 --- P07 --- P08 --- P09 --- P10
        
        P01 ~~~ P06
        P02 ~~~ P07
        P03 ~~~ P08
        P04 ~~~ P09
        P05 ~~~ P10
    end

    subgraph T0["&nbsp;&nbsp;Tier 0: 응용기초&nbsp;&nbsp;"]
        F01["&nbsp;&nbsp;F01 임베딩&nbsp;&nbsp;"]
        F02["&nbsp;&nbsp;F02 시멘틱서치&nbsp;&nbsp;"]
        F03["&nbsp;&nbsp;F03 RAG&nbsp;&nbsp;"]
        F04["&nbsp;&nbsp;F04 지식그래프&nbsp;&nbsp;"]
        F05["&nbsp;&nbsp;F05 그래프DB&nbsp;&nbsp;"]
        F06["&nbsp;&nbsp;F06 LLM&nbsp;&nbsp;"]
        F07["&nbsp;&nbsp;F07 베이지안&nbsp;&nbsp;"]
        F08["&nbsp;&nbsp;F08 TDA&nbsp;&nbsp;"]
        F09["&nbsp;&nbsp;F09 접근제어&nbsp;&nbsp;"]
        F10["&nbsp;&nbsp;F10 에이전트&nbsp;&nbsp;"]

        F01 --- F02 --- F03 --- F04 --- F05
        F06 --- F07 --- F08 --- F09 --- F10
        
        F01 ~~~ F06
        F02 ~~~ F07
        F03 ~~~ F08
        F04 ~~~ F09
        F05 ~~~ F10
    end

    subgraph TC["&nbsp;&nbsp;Tier 1: 핵심&nbsp;&nbsp;"]
        C01["&nbsp;&nbsp;C01 GraphRAG&nbsp;&nbsp;"]
        C02["&nbsp;&nbsp;C02 온톨로지&nbsp;&nbsp;"]
        C03["&nbsp;&nbsp;C03 메타엣지&nbsp;&nbsp;"]
        C04["&nbsp;&nbsp;C04 AIP&nbsp;&nbsp;"]
        C05["&nbsp;&nbsp;C05 위상학적지능&nbsp;&nbsp;"]
    end

    subgraph TF["&nbsp;&nbsp;Tier 2: 프레임워크&nbsp;&nbsp;"]
        C06["&nbsp;&nbsp;C06 분석공간&nbsp;&nbsp;"]
        C07["&nbsp;&nbsp;C07 ReBAC&nbsp;&nbsp;"]
        C08["&nbsp;&nbsp;C08 메타온톨로지&nbsp;&nbsp;"]
        C09["&nbsp;&nbsp;C09 도메인온톨로지&nbsp;&nbsp;"]
        C10["&nbsp;&nbsp;C10 벡터풍부화&nbsp;&nbsp;"]
    end

    subgraph TI["&nbsp;&nbsp;Tier 3: 구현&nbsp;&nbsp;"]
        C11["&nbsp;&nbsp;C11 NOMIK&nbsp;&nbsp;"]
        C12["&nbsp;&nbsp;C12 FDE&nbsp;&nbsp;"]
        C13["&nbsp;&nbsp;C13 레버&nbsp;&nbsp;"]
        C14["&nbsp;&nbsp;C14 물리엔진&nbsp;&nbsp;"]
        C15["&nbsp;&nbsp;C15 ActiveMeta&nbsp;&nbsp;"]
    end

    T1 --> T0
    T0 --> TC
    TC --> TF
    TF --> TI

    style T1 fill:#0d1b2a,stroke:#60a5fa,color:#60a5fa
    style T0 fill:#0d2818,stroke:#34d399,color:#34d399
    style TC fill:#1a0d2e,stroke:#a78bfa,color:#a78bfa
    style TF fill:#2e1a05,stroke:#fbbf24,color:#fbbf24
    style TI fill:#2e0d0d,stroke:#f87171,color:#f87171
```
