<template>
  <div class="comparison-chart">
    <div class="comparison-header">
      <div class="col-label left">{{ leftLabel }}</div>
      <div class="col-label center">{{ title }}</div>
      <div class="col-label right">{{ rightLabel }}</div>
    </div>
    <div v-for="(row, i) in rows" :key="i" class="comparison-row">
      <div class="cell left" :class="{ highlight: row.leftHighlight }">{{ row.left }}</div>
      <div class="cell center metric">{{ row.metric }}</div>
      <div class="cell right" :class="{ highlight: row.rightHighlight }">{{ row.right }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  leftLabel: { type: String, default: '' },
  rightLabel: { type: String, default: '' },
  rows: { type: Array, default: () => [] }
})
</script>

<style scoped>
.comparison-chart {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  overflow: hidden;
  margin: 1.5rem 0;
}

.comparison-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 2px solid var(--vp-c-border);
}

.col-label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-2);
}

.col-label.left { text-align: left; }
.col-label.center { text-align: center; color: var(--vp-c-brand-1); }
.col-label.right { text-align: right; }

.comparison-row {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  padding: 0.65rem 1rem;
  border-bottom: 1px solid var(--vp-c-border);
  transition: background 0.15s;
}

.comparison-row:last-child {
  border-bottom: none;
}

.comparison-row:hover {
  background: var(--vp-c-default-soft);
}

.cell {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.cell.left { text-align: left; }
.cell.center { text-align: center; }
.cell.right { text-align: right; }

.cell.metric {
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
  white-space: nowrap;
}

.cell.highlight {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

@media (max-width: 768px) {
  .comparison-header,
  .comparison-row {
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
  }

  .cell, .col-label {
    font-size: 0.75rem;
  }
}
</style>
