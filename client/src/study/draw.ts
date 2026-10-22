export function shuffle<T>(items: readonly T[], random: () => number = Math.random): T[] {
  const copy = [...items]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1))
    const current = copy[index]
    copy[index] = copy[swap] as T
    copy[swap] = current as T
  }
  return copy
}

export type DrawnQuestion = {
  questionId: string
  optionOrder: string[]
}

export function drawQuestions(
  questions: readonly { id: string; optionIds: readonly string[] }[],
  seenIds: ReadonlySet<string>,
  count: number,
  mode: 'unseen' | 'any',
  random: () => number = Math.random,
): DrawnQuestion[] {
  const pool = questions.filter((question) => mode === 'any' || !seenIds.has(question.id))
  if (count < 1) {
    throw new Error('Choose at least one question.')
  }
  if (pool.length < count) {
    const label = mode === 'unseen' ? 'unseen questions' : 'questions'
    throw new Error(`Only ${pool.length} ${label} available.`)
  }
  return shuffle(pool, random)
    .slice(0, count)
    .map((question) => ({
      questionId: question.id,
      optionOrder: shuffle(question.optionIds, random),
    }))
}
