<template>
  <div class="maturity-chart">
    <h4 class="chart-title">{{ title }}</h4>
    <div class="bars">
      <div v-for="(item, i) in data" :key="i" class="bar-row">
        <div class="bar-label">
          <span class="bar-name">{{ item.label }}</span>
          <span class="bar-value">{{ item.value }}{{ unit }}</span>
        </div>
        <div class="bar-track">
          <div
            class="bar-fill"
            :style="{
              width: (item.value / maxValue * 100) + '%',
              background: item.color || defaultColor
            }"
          ></div>
          <div
            v-if="item.target"
            class="bar-target"
            :style="{ left: (item.target / maxValue * 100) + '%' }"
          >
            <span class="target-label">{{ item.target }}{{ unit }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showLegend" class="legend">
      <span class="legend-item">
        <span class="legend-bar" :style="{ background: defaultColor }"></span>
        현재
      </span>
      <span class="legend-item">
        <span class="legend-marker"></span>
        목표
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  data: { type: Array, default: () => [] },
  unit: { type: String, default: '%' },
  max: { type: Number, default: 0 },
  defaultColor: { type: String, default: '#7c5cfc' },
  showLegend: { type: Boolean, default: false }
})

const maxValue = computed(() => {
  if (props.max > 0) return props.max
  let m = 0
  props.data.forEach(d => {
    if (d.value > m) m = d.value
    if (d.target && d.target > m) m = d.target
  })
  return m * 1.1
})
</script>

<style scoped>
.maturity-chart {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.25rem;
  margin: 1.5rem 0;
  background: var(--vp-c-bg-alt);
}

.chart-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 1rem 0;
}

.bars {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.bar-row {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.bar-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}

.bar-name {
  color: var(--vp-c-text-2);
}

.bar-value {
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-family: var(--vp-font-family-mono);
}

.bar-track {
  position: relative;
  height: 8px;
  background: var(--vp-c-default-soft);
  border-radius: 4px;
  overflow: visible;
}

.bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s ease;
}

.bar-target {
  position: absolute;
  top: -4px;
  width: 2px;
  height: 16px;
  background: var(--vp-c-warning-1);
  border-radius: 1px;
}

.target-label {
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.65rem;
  color: var(--vp-c-warning-1);
  white-space: nowrap;
}

.legend {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.legend-bar {
  display: inline-block;
  width: 12px;
  height: 4px;
  border-radius: 2px;
}

.legend-marker {
  display: inline-block;
  width: 2px;
  height: 10px;
  background: var(--vp-c-warning-1);
  border-radius: 1px;
}
</style>
