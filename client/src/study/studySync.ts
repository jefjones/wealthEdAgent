/**
 * Pure merge rules for study data.
 * The server stays the source of truth. Local rows are uploaded only when the
 * server does not already have them. Progress uploads only when the local row
 * is strictly newer and the completed flag differs, so a newer clock cannot
 * overwrite a server timestamp for the same state.
 */

export type StudyFeature = 'progress' | 'seen' | 'attempts' | 'highlights' | 'searchHistory' | 'activity'

/** How long a feature stays on its browser backup before the client asks the server again. */
export const REPROBE_MS = 60_000

const BANNER_FEATURES: readonly StudyFeature[] = ['progress', 'seen', 'attempts', 'highlights', 'searchHistory']

export type SyncProgress = {
  chapterId: string
  sectionId: string
  completed: boolean
  completedAt: string | null
}

export type SyncHighlight = {
  highlightId: string
  chapterId: string
  sectionId: string
  startOffset: number
  endOffset: number
  text: string
  createdAt: string
}

export type SyncAttempt = {
  attemptId: string
  startedAt: string
}

export type SyncSeen = {
  questionId: string
}

export function progressKey(row: Pick<SyncProgress, 'chapterId' | 'sectionId'>) {
  return `${row.chapterId}\u0000${row.sectionId}`
}

export function highlightContentKey(
  row: Pick<SyncHighlight, 'chapterId' | 'sectionId' | 'startOffset' | 'endOffset' | 'text'>,
) {
  return [row.chapterId, row.sectionId, String(row.startOffset), String(row.endOffset), row.text].join('\u0000')
}

function stamp(value: string | null) {
  if (!value) return null
  const ms = Date.parse(value)
  return Number.isFinite(ms) ? ms : null
}

function lastBy<T>(rows: readonly T[], keyOf: (row: T) => string) {
  const map = new Map<string, T>()
  rows.forEach((row) => map.set(keyOf(row), row))
  return map
}

/**
 * Local is uploaded only when its timestamp is strictly newer and completed differs.
 * Equal timestamps and missing timestamps keep the server row.
 * A local-only incomplete section is not uploaded: absence already means incomplete.
 */
export function mergeProgress(server: readonly SyncProgress[], local: readonly SyncProgress[]) {
  const serverRows = lastBy(server, progressKey)
  const localRows = lastBy(local, progressKey)
  const keys = [...serverRows.keys()]
  localRows.forEach((_row, key) => {
    if (!serverRows.has(key)) keys.push(key)
  })
  const merged: SyncProgress[] = []
  const upload: SyncProgress[] = []
  keys.forEach((key) => {
    const serverRow = serverRows.get(key)
    const localRow = localRows.get(key)
    if (serverRow && localRow) {
      const localMs = stamp(localRow.completedAt)
      const serverMs = stamp(serverRow.completedAt)
      const localNewer = localMs !== null && (serverMs === null || localMs > serverMs)
      if (localNewer && serverRow.completed !== localRow.completed) {
        merged.push(localRow)
        upload.push(localRow)
      } else {
        merged.push(serverRow)
      }
      return
    }
    if (serverRow) {
      merged.push(serverRow)
      return
    }
    if (localRow?.completed) {
      merged.push(localRow)
      upload.push(localRow)
    }
  })
  return { merged, upload }
}

export function mergeHighlights(
  server: readonly SyncHighlight[],
  local: readonly SyncHighlight[],
  deletedIds: readonly string[] = [],
) {
  const deleted = new Set(deletedIds)
  const keptServer = server.filter((row) => !deleted.has(row.highlightId))
  const serverIds = new Set(keptServer.map((row) => row.highlightId))
  const content = new Set(keptServer.map((row) => highlightContentKey(row)))
  const seen = new Set<string>()
  const upload: SyncHighlight[] = []
  local.forEach((row) => {
    if (deleted.has(row.highlightId) || serverIds.has(row.highlightId)) return
    const key = highlightContentKey(row)
    if (content.has(key) || seen.has(row.highlightId) || seen.has(key)) return
    seen.add(row.highlightId)
    seen.add(key)
    upload.push(row)
  })
  const deleteIds = [...new Set(server.filter((row) => deleted.has(row.highlightId)).map((row) => row.highlightId))]
  return { merged: [...keptServer, ...upload], upload, deleteIds }
}

/** Local attempts whose ids are not already on the server and not already uploaded. */
export function mergeAttempts<T extends { attemptId: string }>(
  server: readonly { attemptId: string }[],
  local: readonly T[],
  uploadedLocalIds: readonly string[] = [],
) {
  const serverIds = new Set(server.map((row) => row.attemptId))
  const uploaded = new Set(uploadedLocalIds)
  const seen = new Set<string>()
  const upload: T[] = []
  local.forEach((row) => {
    if (serverIds.has(row.attemptId) || uploaded.has(row.attemptId) || seen.has(row.attemptId)) return
    seen.add(row.attemptId)
    upload.push(row)
  })
  return { upload }
}

export function unionAttempts<T extends SyncAttempt>(server: readonly T[], extra: readonly T[]) {
  const ids = new Set(server.map((row) => row.attemptId))
  return [...server, ...extra.filter((row) => !ids.has(row.attemptId))].sort((a, b) =>
    a.startedAt < b.startedAt ? 1 : a.startedAt > b.startedAt ? -1 : 0,
  )
}

/** Seen questions have no write route. The union keeps local-only ids in the browser view. */
export function mergeSeen<T extends SyncSeen>(server: readonly T[], local: readonly T[]) {
  const ids = new Set(server.map((row) => row.questionId))
  const seen = new Set<string>()
  const localOnly: T[] = []
  local.forEach((row) => {
    if (ids.has(row.questionId) || seen.has(row.questionId)) return
    seen.add(row.questionId)
    localOnly.push(row)
  })
  return { merged: [...server, ...localOnly], localOnly }
}

export function classifyStudyFailure(input: {
  network?: boolean
  status?: number
  studyUnavailable?: boolean
  missingRouteFallsBack?: boolean
}): 'undeployed' | 'unreachable' | null {
  if (input.studyUnavailable) return 'undeployed'
  if (input.missingRouteFallsBack && input.status === 404) return 'undeployed'
  if (input.network) return 'unreachable'
  if (typeof input.status === 'number' && input.status >= 500) return 'unreachable'
  return null
}

/**
 * A 404 counts as "this route is not deployed" for highlights, search history, and activity, including an empty body.
 * Progress, seen questions, and attempts only treat the exact study-unavailable message that way.
 * The result names one feature. It never implies the others failed.
 */
export function classifyFeatureFailure(
  feature: StudyFeature,
  input: { network?: boolean; status?: number; studyUnavailable?: boolean },
  missingRouteFallsBack = feature === 'highlights' || feature === 'searchHistory' || feature === 'activity',
): 'undeployed' | 'unreachable' | null {
  return classifyStudyFailure({ ...input, missingRouteFallsBack })
}

export function noticeFeatures(down: Iterable<StudyFeature>): StudyFeature[] {
  const unavailable = new Set(down)
  return BANNER_FEATURES.filter((feature) => unavailable.has(feature))
}

export function studyNoticeMessage(down: readonly StudyFeature[]) {
  return noticeFeatures(down)
    .map((feature) => {
      if (feature === 'highlights') return 'Highlights are saved in this browser only for now.'
      if (feature === 'searchHistory') return 'Subject searches are saved in this browser only for now.'
      if (feature === 'progress') return 'Reading progress is saved in this browser only for now.'
      if (feature === 'attempts') return 'Test scores are saved in this browser only for now.'
      return 'Seen questions are saved in this browser only for now.'
    })
    .join(' ')
}

export function featuresDueForReprobe(
  down: readonly { feature: StudyFeature; downSince: number }[],
  now: number,
  options: { focus?: boolean; intervalMs?: number } = {},
): StudyFeature[] {
  const interval = options.intervalMs ?? REPROBE_MS
  return down.filter((row) => options.focus || now - row.downSince >= interval).map((row) => row.feature)
}

export type MigrationMark = Partial<Record<StudyFeature, true>>

export function shouldMigrate(mark: MigrationMark | undefined, feature: StudyFeature) {
  return mark?.[feature] !== true
}

export function withFeatureMigrated(mark: MigrationMark, feature: StudyFeature): MigrationMark {
  return { ...mark, [feature]: true }
}

export function withoutFeatureMigrated(mark: MigrationMark, feature: StudyFeature): MigrationMark {
  const next: MigrationMark = { ...mark }
  delete next[feature]
  return next
}
