<template>
  <div class="concept-graph-container">
    <div class="graph-controls">
      <button
        v-for="tier in tiers"
        :key="tier.value"
        :class="['tier-filter', { active: activeTier === tier.value }]"
        :style="{ '--tier-color': tier.color }"
        @click="toggleTier(tier.value)"
      >
        {{ tier.label }}
      </button>
      <button class="tier-filter reset" @click="activeTier = null">전체</button>
    </div>
    <div ref="graphEl" class="graph-canvas"></div>
    <div v-if="tooltip.show" class="graph-tooltip" :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }">
      <strong>{{ tooltip.id }}</strong>
      <span>{{ tooltip.label }}</span>
      <span class="tier-label">Tier {{ tooltip.tier }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRouter, withBase } from 'vitepress'
import conceptData from '../data/concepts.json'

const graphEl = ref(null)
const activeTier = ref(null)
const tooltip = ref({ show: false, x: 0, y: 0, id: '', label: '', tier: '' })
const router = useRouter()

const tierColors = {
  '-1': '#60a5fa',
  '0': '#34d399',
  '1': '#a78bfa',
  '2': '#fbbf24',
  '3': '#f87171'
}

const tiers = [
  { value: -1, label: 'Tier -1', color: tierColors['-1'] },
  { value: 0, label: 'Tier 0', color: tierColors['0'] },
  { value: 1, label: 'Tier 1', color: tierColors['1'] },
  { value: 2, label: 'Tier 2', color: tierColors['2'] },
  { value: 3, label: 'Tier 3', color: tierColors['3'] },
]

let simulation = null

function toggleTier(tier) {
  activeTier.value = activeTier.value === tier ? null : tier
}

async function renderGraph() {
  if (!graphEl.value) return
  const d3 = await import('d3')

  const container = graphEl.value
  container.innerHTML = ''

  const width = container.clientWidth
  const height = Math.max(500, window.innerHeight - 300)

  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])

  const g = svg.append('g')

  // Zoom
  const zoom = d3.zoom()
    .scaleExtent([0.3, 3])
    .on('zoom', (event) => g.attr('transform', event.transform))
  svg.call(zoom)

  // Deep copy data
  const nodes = conceptData.nodes.map(d => ({ ...d }))
  const links = conceptData.links.map(d => ({ ...d }))

  // Simulation
  simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(100))
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(35))

  // Links
  const link = g.append('g')
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('stroke', '#2e2e2e')
    .attr('stroke-width', 1.5)
    .attr('stroke-opacity', 0.6)

  // Node groups
  const node = g.append('g')
    .selectAll('g')
    .data(nodes)
    .join('g')
    .attr('cursor', 'pointer')
    .call(d3.drag()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x
        d.fy = d.y
      })
      .on('drag', (event, d) => {
        d.fx = event.x
        d.fy = event.y
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
      })
    )

  // Node circles
  node.append('circle')
    .attr('r', d => d.tier >= 1 ? 20 : 16)
    .attr('fill', d => {
      const color = tierColors[String(d.tier)]
      return color + '22'
    })
    .attr('stroke', d => tierColors[String(d.tier)])
    .attr('stroke-width', 2)

  // Node labels
  node.append('text')
    .text(d => d.label)
    .attr('text-anchor', 'middle')
    .attr('dy', d => (d.tier >= 1 ? 20 : 16) + 14)
    .attr('fill', '#a0a0a0')
    .attr('font-size', '10px')
    .attr('font-family', 'var(--vp-font-family-base)')

  // Node ID labels
  node.append('text')
    .text(d => d.id)
    .attr('text-anchor', 'middle')
    .attr('dy', '0.35em')
    .attr('fill', d => tierColors[String(d.tier)])
    .attr('font-size', '9px')
    .attr('font-weight', '600')
    .attr('font-family', 'var(--vp-font-family-mono)')

  // Hover
  node.on('mouseenter', (event, d) => {
    const rect = container.getBoundingClientRect()
    tooltip.value = {
      show: true,
      x: event.clientX - rect.left + 10,
      y: event.clientY - rect.top - 10,
      id: d.id,
      label: d.label,
      tier: d.tier
    }
    // Highlight connected
    const connected = new Set()
    links.forEach(l => {
      const sid = typeof l.source === 'object' ? l.source.id : l.source
      const tid = typeof l.target === 'object' ? l.target.id : l.target
      if (sid === d.id) connected.add(tid)
      if (tid === d.id) connected.add(sid)
    })
    connected.add(d.id)

    node.attr('opacity', n => connected.has(n.id) ? 1 : 0.15)
    link.attr('stroke-opacity', l => {
      const sid = typeof l.source === 'object' ? l.source.id : l.source
      const tid = typeof l.target === 'object' ? l.target.id : l.target
      return (sid === d.id || tid === d.id) ? 0.8 : 0.05
    })
    link.attr('stroke', l => {
      const sid = typeof l.source === 'object' ? l.source.id : l.source
      const tid = typeof l.target === 'object' ? l.target.id : l.target
      return (sid === d.id || tid === d.id) ? tierColors[String(d.tier)] : '#2e2e2e'
    })
  })
  .on('mouseleave', () => {
    tooltip.value.show = false
    node.attr('opacity', 1)
    link.attr('stroke-opacity', 0.6).attr('stroke', '#2e2e2e')
  })
  .on('click', (event, d) => {
    if (d.link) window.location.href = withBase(d.link)
  })

  // Tick
  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)
    node.attr('transform', d => `translate(${d.x},${d.y})`)
  })

  // Tier filter
  watch(activeTier, (tier) => {
    if (tier === null) {
      node.attr('opacity', 1)
      link.attr('stroke-opacity', 0.6)
    } else {
      node.attr('opacity', d => d.tier === tier ? 1 : 0.1)
      link.attr('stroke-opacity', l => {
        const s = typeof l.source === 'object' ? l.source : nodes.find(n => n.id === l.source)
        const t = typeof l.target === 'object' ? l.target : nodes.find(n => n.id === l.target)
        return (s?.tier === tier && t?.tier === tier) ? 0.8 : 0.05
      })
    }
  })
}

onMounted(() => {
  nextTick(renderGraph)
})
</script>

<style scoped>
.concept-graph-container {
  position: relative;
  margin: 1.5rem 0;
}

.graph-controls {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tier-filter {
  padding: 0.35rem 0.75rem;
  border: 1px solid var(--tier-color, #2e2e2e);
  border-radius: 6px;
  background: transparent;
  color: var(--tier-color, var(--vp-c-text-2));
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.tier-filter:hover,
.tier-filter.active {
  background: var(--tier-color, #2e2e2e);
  color: #101010;
}

.tier-filter.reset {
  --tier-color: #a0a0a0;
}

.graph-canvas {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg-alt);
}

.graph-canvas :deep(svg) {
  display: block;
}

.graph-tooltip {
  position: absolute;
  pointer-events: none;
  background: #1a1a1a;
  border: 1px solid #2e2e2e;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  font-size: 0.8rem;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.graph-tooltip strong {
  color: #f5f5f5;
}

.graph-tooltip span {
  color: #a0a0a0;
}

.graph-tooltip .tier-label {
  color: var(--vp-c-brand-1);
  font-size: 0.7rem;
  font-weight: 600;
}
</style>
