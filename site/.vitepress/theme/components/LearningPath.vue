<template>
  <div class="learning-path">
    <div class="role-selector">
      <button
        v-for="role in roles"
        :key="role.id"
        :class="['role-btn', { active: activeRole === role.id }]"
        :style="{ '--role-color': role.color }"
        @click="activeRole = role.id"
      >
        {{ role.label }}
      </button>
    </div>

    <div v-if="currentRole" class="path-info">
      <p class="role-desc">{{ currentRole.description }}</p>
    </div>

    <div v-if="currentRole" class="path-timeline">
      <div
        v-for="(step, i) in currentRole.steps"
        :key="step.id"
        class="path-step"
        :style="{ '--step-color': getTierColor(step.tier) }"
      >
        <div class="step-connector" v-if="i > 0"></div>
        <a href="#" class="step-node" @click.prevent="navigateTo(step.link)">
          <div class="step-number">{{ i + 1 }}</div>
          <div class="step-content">
            <div class="step-header">
              <span class="step-id">{{ step.id }}</span>
              <span class="step-tier">{{ getTierLabel(step.tier) }}</span>
            </div>
            <div class="step-label">{{ step.label }}</div>
            <div class="step-desc">{{ step.desc }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, withBase } from 'vitepress'
import pathData from '../data/learning-paths.json'

const router = useRouter()
const roles = pathData.roles
const activeRole = ref('beginner')

const currentRole = computed(() => {
  return roles.find(r => r.id === activeRole.value)
})

const tierColors = {
  'guide': '#34d399',
  '-1': '#60a5fa',
  '0': '#34d399',
  '1': '#a78bfa',
  '2': '#fbbf24',
  '3': '#f87171'
}

const tierLabels = {
  'guide': 'Guide',
  '-1': 'Tier -1',
  '0': 'Tier 0',
  '1': 'Tier 1',
  '2': 'Tier 2',
  '3': 'Tier 3'
}

function getTierColor(tier) {
  return tierColors[String(tier)] || '#a0a0a0'
}

function getTierLabel(tier) {
  return tierLabels[String(tier)] || ''
}

async function navigateTo(link) {
  const hash = link.split('#')[1]
  await router.go(withBase(link))
  if (hash) {
    setTimeout(() => {
      const nfd = hash.normalize('NFD')
      const el = document.getElementById(hash) || document.getElementById(nfd)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 500)
  }
}
</script>

<style scoped>
.learning-path {
  margin: 1.5rem 0;
}

.role-selector {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.role-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--role-color, #2e2e2e);
  border-radius: 8px;
  background: transparent;
  color: var(--role-color, var(--vp-c-text-2));
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.role-btn:hover {
  background: color-mix(in srgb, var(--role-color) 10%, transparent);
}

.role-btn.active {
  background: var(--role-color);
  color: #101010;
  font-weight: 600;
}

.path-info {
  margin-bottom: 1.5rem;
}

.role-desc {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin: 0;
}

.path-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.path-step {
  position: relative;
}

.step-connector {
  width: 2px;
  height: 12px;
  background: var(--step-color);
  opacity: 0.3;
  margin-left: 19px;
}

.step-node {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  text-decoration: none;
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: all 0.2s;
}

.step-node:hover {
  background: var(--vp-c-default-soft);
  border-color: var(--step-color);
}

.step-number {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  background: color-mix(in srgb, var(--step-color) 15%, transparent);
  color: var(--step-color);
  border: 2px solid var(--step-color);
}

.step-content {
  flex: 1;
  min-width: 0;
}

.step-header {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.15rem;
}

.step-id {
  font-family: var(--vp-font-family-mono);
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--step-color);
}

.step-tier {
  font-size: 0.65rem;
  padding: 0.05rem 0.35rem;
  border-radius: 3px;
  background: color-mix(in srgb, var(--step-color) 12%, transparent);
  color: var(--step-color);
}

.step-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.15rem;
}

.step-desc {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

@media (max-width: 768px) {
  .role-btn {
    padding: 0.4rem 0.75rem;
    font-size: 0.8rem;
  }

  .step-node {
    padding: 0.5rem;
  }
}
</style>
