<template>
  <div class="quiz-container">
    <h4 class="quiz-title">{{ title }}</h4>

    <div v-if="!submitted" class="quiz-questions">
      <div v-for="(q, qi) in questions" :key="qi" class="question">
        <p class="q-text"><span class="q-num">Q{{ qi + 1 }}.</span> {{ q.question }}</p>

        <div v-if="q.type === 'multiple'" class="options">
          <label
            v-for="(opt, oi) in q.options"
            :key="oi"
            class="option"
            :class="{ selected: answers[qi] === oi }"
          >
            <input type="radio" :name="'q' + qi" :value="oi" v-model="answers[qi]" />
            <span class="option-text">{{ opt }}</span>
          </label>
        </div>

        <div v-else-if="q.type === 'truefalse'" class="options tf">
          <label class="option" :class="{ selected: answers[qi] === true }">
            <input type="radio" :name="'q' + qi" :value="true" v-model="answers[qi]" />
            <span class="option-text">O (참)</span>
          </label>
          <label class="option" :class="{ selected: answers[qi] === false }">
            <input type="radio" :name="'q' + qi" :value="false" v-model="answers[qi]" />
            <span class="option-text">X (거짓)</span>
          </label>
        </div>
      </div>

      <button class="submit-btn" @click="submit" :disabled="!allAnswered">결과 확인</button>
    </div>

    <div v-else class="quiz-results">
      <div class="score-box">
        <span class="score">{{ score }}/{{ questions.length }}</span>
        <span class="score-label">{{ scoreLabel }}</span>
      </div>

      <div v-for="(q, qi) in questions" :key="qi" class="result-item" :class="{ correct: isCorrect(qi), wrong: !isCorrect(qi) }">
        <p class="q-text">
          <span class="q-num">Q{{ qi + 1 }}.</span> {{ q.question }}
          <span class="result-badge">{{ isCorrect(qi) ? '✓' : '✗' }}</span>
        </p>
        <p v-if="!isCorrect(qi)" class="explanation">
          <strong>정답:</strong> {{ getAnswerText(q, q.answer) }}<br/>
          <span v-if="q.explanation">{{ q.explanation }}</span>
        </p>
        <p v-else class="explanation correct-exp">
          <span v-if="q.explanation">{{ q.explanation }}</span>
        </p>
      </div>

      <button class="retry-btn" @click="retry">다시 풀기</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: { type: String, default: '퀴즈' },
  questions: { type: Array, default: () => [] }
})

const answers = ref({})
const submitted = ref(false)

const allAnswered = computed(() => {
  return props.questions.every((_, i) => answers.value[i] !== undefined)
})

const score = computed(() => {
  return props.questions.filter((_, i) => isCorrect(i)).length
})

const scoreLabel = computed(() => {
  const ratio = score.value / props.questions.length
  if (ratio === 1) return '완벽합니다!'
  if (ratio >= 0.8) return '훌륭합니다!'
  if (ratio >= 0.6) return '좋습니다!'
  return '다시 복습해보세요'
})

function isCorrect(qi) {
  return answers.value[qi] === props.questions[qi].answer
}

function getAnswerText(q, answer) {
  if (q.type === 'truefalse') return answer ? 'O (참)' : 'X (거짓)'
  if (q.type === 'multiple') return q.options[answer]
  return String(answer)
}

function submit() {
  submitted.value = true
}

function retry() {
  answers.value = {}
  submitted.value = false
}
</script>

<style scoped>
.quiz-container {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.25rem;
  margin: 1.5rem 0;
  background: var(--vp-c-bg-alt);
}

.quiz-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 1rem 0;
}

.question {
  margin-bottom: 1.25rem;
}

.q-text {
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.q-num {
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin-right: 0.25rem;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.options.tf {
  flex-direction: row;
  gap: 0.75rem;
}

.option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
}

.option:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.option.selected {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.option input[type="radio"] {
  accent-color: var(--vp-c-brand-1);
}

.option-text {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.submit-btn, .retry-btn {
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.submit-btn {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.submit-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.submit-btn:not(:disabled):hover {
  background: var(--vp-c-brand-2);
}

.retry-btn {
  background: transparent;
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-2);
  margin-top: 1rem;
}

.retry-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.score-box {
  text-align: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background: var(--vp-c-brand-soft);
}

.score {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  font-family: var(--vp-font-family-mono);
}

.score-label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.result-item {
  padding: 0.75rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.result-item.correct {
  background: rgba(52, 211, 153, 0.08);
  border-left: 3px solid #34d399;
}

.result-item.wrong {
  background: rgba(248, 113, 113, 0.08);
  border-left: 3px solid #f87171;
}

.result-badge {
  margin-left: 0.5rem;
  font-weight: 700;
}

.result-item.correct .result-badge { color: #34d399; }
.result-item.wrong .result-badge { color: #f87171; }

.explanation {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin: 0.25rem 0 0 1.5rem;
  line-height: 1.6;
}

.correct-exp {
  color: var(--vp-c-text-3);
}
</style>
