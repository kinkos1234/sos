<template>
  <div class="progress-tracker">
    <div class="progress-header">
      <h4 class="progress-title">학습 진도</h4>
      <span class="progress-pct">{{ completedCount }}/{{ totalCount }} ({{ pct }}%)</span>
    </div>
    <div class="progress-bar-track">
      <div class="progress-bar-fill" :style="{ width: pct + '%' }"></div>
    </div>
    <div class="progress-sections">
      <div v-for="section in sections" :key="section.id" class="section">
        <div class="section-header" @click="toggleSection(section.id)">
          <span class="section-arrow" :class="{ open: openSections[section.id] }">&#9654;</span>
          <span class="section-name" :style="{ color: section.color }">{{ section.label }}</span>
          <span class="section-count">{{ getSectionCompleted(section.id) }}/{{ section.items.length }}</span>
        </div>
        <div v-if="openSections[section.id]" class="section-items">
          <label
            v-for="item in section.items"
            :key="item.id"
            class="check-item"
          >
            <input
              type="checkbox"
              :checked="isChecked(item.id)"
              @change="toggle(item.id)"
            />
            <span class="check-label">
              <span class="check-id">{{ item.id }}</span>
              {{ item.label }}
            </span>
          </label>
        </div>
      </div>
    </div>
    <button class="reset-btn" @click="resetAll">진도 초기화</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const STORAGE_KEY = 'ons-progress'

const sections = [
  {
    id: 'tier-1',
    label: 'Tier -1: 순수기초',
    color: '#60a5fa',
    items: [
      { id: 'P01', label: '확률·통계' },
      { id: 'P02', label: '벡터·선형대수' },
      { id: 'P03', label: '그래프 이론' },
      { id: 'P04', label: '데이터베이스' },
      { id: 'P05', label: 'AI/ML 기초' },
      { id: 'P06', label: 'NLP 기초' },
      { id: 'P07', label: '정보검색' },
      { id: 'P08', label: '트랜스포머' },
      { id: 'P09', label: 'API 아키텍처' },
      { id: 'P10', label: '보안·인증' },
    ]
  },
  {
    id: 'tier0',
    label: 'Tier 0: 응용기초',
    color: '#34d399',
    items: [
      { id: 'F01', label: '임베딩' },
      { id: 'F02', label: '시멘틱 서치' },
      { id: 'F03', label: 'RAG' },
      { id: 'F04', label: '지식 그래프' },
      { id: 'F05', label: '그래프 DB' },
      { id: 'F06', label: 'LLM 활용' },
      { id: 'F07', label: '베이지안 추론' },
      { id: 'F08', label: '위상수학/TDA' },
      { id: 'F09', label: '접근제어' },
      { id: 'F10', label: '에이전트' },
    ]
  },
  {
    id: 'tier1',
    label: 'Tier 1: 핵심',
    color: '#a78bfa',
    items: [
      { id: 'C01', label: 'GraphRAG' },
      { id: 'C02', label: '온톨로지' },
      { id: 'C03', label: '메타엣지' },
      { id: 'C04', label: '팔란티어 AIP' },
      { id: 'C05', label: '위상학적 지능' },
    ]
  },
  {
    id: 'tier2',
    label: 'Tier 2: 프레임워크',
    color: '#fbbf24',
    items: [
      { id: 'C06', label: '6개 분석공간' },
      { id: 'C07', label: 'ReBAC' },
      { id: 'C08', label: '메타온톨로지' },
      { id: 'C09', label: '도메인 온톨로지' },
      { id: 'C10', label: '벡터 의미 풍부화' },
    ]
  },
  {
    id: 'tier3',
    label: 'Tier 3: 구현',
    color: '#f87171',
    items: [
      { id: 'C11', label: 'NOMIK' },
      { id: 'C12', label: 'FDE' },
      { id: 'C13', label: '레버/메타레버' },
      { id: 'C14', label: '물리적 계산엔진' },
      { id: 'C15', label: 'Active Metadata' },
    ]
  },
]

const checked = ref({})
const openSections = ref({})

const totalCount = computed(() => {
  return sections.reduce((sum, s) => sum + s.items.length, 0)
})

const completedCount = computed(() => {
  return Object.values(checked.value).filter(Boolean).length
})

const pct = computed(() => {
  if (totalCount.value === 0) return 0
  return Math.round((completedCount.value / totalCount.value) * 100)
})

function isChecked(id) {
  return !!checked.value[id]
}

function toggle(id) {
  checked.value[id] = !checked.value[id]
  save()
}

function toggleSection(id) {
  openSections.value[id] = !openSections.value[id]
}

function getSectionCompleted(sectionId) {
  const section = sections.find(s => s.id === sectionId)
  if (!section) return 0
  return section.items.filter(item => checked.value[item.id]).length
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked.value))
  } catch {}
}

function load() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) checked.value = JSON.parse(data)
  } catch {}
}

function resetAll() {
  checked.value = {}
  save()
}

onMounted(load)
</script>

<style scoped>
.progress-tracker {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.25rem;
  margin: 1.5rem 0;
  background: var(--vp-c-bg-alt);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.progress-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.progress-pct {
  font-family: var(--vp-font-family-mono);
  font-size: 0.85rem;
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.progress-bar-track {
  height: 6px;
  background: var(--vp-c-default-soft);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 1.25rem;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #7c5cfc, #34d399);
  border-radius: 3px;
  transition: width 0.4s ease;
}

.progress-sections {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.25rem;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.15s;
}

.section-header:hover {
  background: var(--vp-c-default-soft);
}

.section-arrow {
  font-size: 0.6rem;
  color: var(--vp-c-text-3);
  transition: transform 0.2s;
}

.section-arrow.open {
  transform: rotate(90deg);
}

.section-name {
  font-size: 0.85rem;
  font-weight: 600;
  flex: 1;
}

.section-count {
  font-family: var(--vp-font-family-mono);
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.section-items {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
}

.check-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s;
}

.check-item:hover {
  background: var(--vp-c-default-soft);
}

.check-item input[type="checkbox"] {
  accent-color: var(--vp-c-brand-1);
  width: 14px;
  height: 14px;
}

.check-label {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.check-id {
  font-family: var(--vp-font-family-mono);
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  margin-right: 0.25rem;
}

.reset-btn {
  margin-top: 1rem;
  padding: 0.35rem 0.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
}

.reset-btn:hover {
  border-color: var(--vp-c-danger-1);
  color: var(--vp-c-danger-1);
}
</style>
