<template>
  <a :href="link" class="tier-card" :style="{ '--tier-accent': color }">
    <div class="tier-badge">{{ badge }}</div>
    <h3 class="tier-title">{{ title }}</h3>
    <p class="tier-desc">{{ description }}</p>
    <div class="tier-concepts">
      <span v-for="c in concepts" :key="c" class="concept-tag">{{ c }}</span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  badge: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  concepts: { type: Array, default: () => [] },
  link: { type: String, default: '#' },
  color: { type: String, default: '#7c5cfc' }
})
</script>

<style scoped>
.tier-card {
  display: block;
  text-decoration: none;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.25rem;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  background: var(--vp-c-bg-alt);
}

.tier-card:hover {
  border-color: var(--tier-accent);
  box-shadow: 0 0 0 1px var(--tier-accent), 0 4px 16px rgba(0,0,0,0.2);
  transform: translateY(-2px);
}

.tier-badge {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  background: color-mix(in srgb, var(--tier-accent) 15%, transparent);
  color: var(--tier-accent);
  margin-bottom: 0.75rem;
}

.tier-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
}

.tier-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 0.75rem 0;
}

.tier-concepts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.concept-tag {
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-3);
}
</style>
