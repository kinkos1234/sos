# CMR (Capability Maturity Registry) & Audit

> 출처: 3월 6-7일.docx — Capability 생명주기 추적 레지스트리

---

## CMR이란

Capability의 생명주기를 추적하는 레지스트리:

```mermaid
graph LR
    DEV["&nbsp;&nbsp;개발&nbsp;&nbsp;"] --> TEST["&nbsp;&nbsp;테스트&nbsp;&nbsp;"]
    TEST --> BIND["&nbsp;&nbsp;바인딩&nbsp;&nbsp;"]
    BIND --> CERT["&nbsp;&nbsp;인증&nbsp;&nbsp;"]
    CERT --> PROD["&nbsp;&nbsp;프로덕션&nbsp;&nbsp;"]
    PROD --> OPS["&nbsp;&nbsp;운영&nbsp;&nbsp;"]
    OPS --> EOL["&nbsp;&nbsp;폐기&nbsp;&nbsp;"]

    style DEV fill:#1e3a5f,stroke:#60a5fa,color:#60a5fa
    style TEST fill:#1a3c34,stroke:#34d399,color:#34d399
    style BIND fill:#3b1f5e,stroke:#a78bfa,color:#a78bfa
    style CERT fill:#4a2c17,stroke:#fbbf24,color:#fbbf24
    style PROD fill:#1a3c34,stroke:#34d399,color:#34d399
    style OPS fill:#3b1f5e,stroke:#a78bfa,color:#a78bfa
    style EOL fill:#4a1717,stroke:#f87171,color:#f87171
```

### CMR의 5가지 역할
1. **Binding Completeness** — "이 capability는 실제로 구현되어 있는가?"
2. **Production Readiness** — "언제 production에 갈 수 있는가?"
3. **Risk Management** — "어떤 의존성이 깨지면 문제인가?"
4. **Maturity Tracking** — "얼마나 성숙했는가? (1-5레벨)"
5. **Operational Transparency** — "지금 뭐 문제 있는가?"

---

## CMR 5개 예시 요약

### CMR #1: Intelligence Service — compute_edge_health
- Maturity: 4/5 (Production with Monitoring)
- 성공률: 99.8%, 평균 지연: 2.3s, 847 calls/day
- 다음 목표: Latency 2.3s → 1.5s (caching 추가)

### CMR #2: Handler Chain — action.created (Seeding)
- Maturity: 3/5 (Testing → Production)
- Production FLAG 비활성화 상태 (circular role 버그)
- Blocker: circular_role_detection 알고리즘 리뷰 필요

### CMR #3: Analysis Module — semantic_space_analyzer
- Maturity: **5/5** (Production Mature)
- 8,234 calls/day, 99.97% 성공률, 340ms 평균
- 캐시 히트율: 73%, 테스트 커버리지: 96%

### CMR #4: Edge Function — Entity Extraction (Cloud Run)
- 12,450 invocations/day, p99 920ms
- 비용: 월 $814 (함수 $234 + LLM $580)
- Canary 배포: 95% 현재 / 5% 테스트

### CMR #5: Dashboard — Real-time Pipeline Monitor (SSE)
- Beta → Production, Feature Flag disabled
- reconnect 실패율 6% (목표 1% 미만)
- 사용자 만족도: 8.2/10 (n=42 beta)

---

## Audit 보고서 핵심 지표 (2026-03-06)

### 전체 건강도: 78.4% (GOOD, 목표 85%)

### Maturity Level 분포 (1,247 capabilities)
| Level | 수량 | 비율 |
|-------|------|------|
| 1 (Concept) | 45 | 3.6% |
| 2 (Development) | 178 | 14.3% |
| 3 (Testing) | 312 | 25.0% ← 최다 |
| 4 (Production) | 658 | 52.8% |
| 5 (Mature) | 54 | 4.3% |

### Binding Status
- BOUND & VERIFIED: 978 (78.4%)
- UNBOUND (위험): 21 (1.7%)

### SLA Compliance: 90.9% (목표 95%)

### 테스트 커버리지 GAP
- Level 2 Integration: 31% vs 60% 목표
- Level 4 E2E: 58% vs 80% 목표

### 핵심 발견
- Level 3(Testing)에서 incident 발생률이 Level 4 대비 **4.2배** 높음
- 근본 원인: Integration test gap (71.3%, 목표 85%)

---

## 시각화

<script setup>
import MaturityChart from '../.vitepress/theme/components/MaturityChart.vue'
</script>

<MaturityChart
  title="Maturity Level 분포 (1,247 capabilities)"
  :data="[
    { label: 'Level 5 (Mature)', value: 4.3, color: '#34d399' },
    { label: 'Level 4 (Production)', value: 52.8, color: '#7c5cfc' },
    { label: 'Level 3 (Testing)', value: 25.0, color: '#fbbf24' },
    { label: 'Level 2 (Development)', value: 14.3, color: '#60a5fa' },
    { label: 'Level 1 (Concept)', value: 3.6, color: '#f87171' },
  ]"
  unit="%"
  :max="60"
/>

<MaturityChart
  title="테스트 커버리지 GAP"
  :data="[
    { label: 'Level 2 Integration Test', value: 31, target: 60, color: '#60a5fa' },
    { label: 'Level 3 Integration Test', value: 71.3, target: 85, color: '#fbbf24' },
    { label: 'Level 4 E2E Test', value: 58, target: 80, color: '#7c5cfc' },
    { label: 'SLA Compliance', value: 90.9, target: 95, color: '#34d399' },
  ]"
  unit="%"
  :max="100"
  :showLegend="true"
/>
