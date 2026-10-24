/** Drop a leading "Topic 4:" (or "Topic 4.") and keep the subject title. */
export function subjectTitle(title: string): string {
  const stripped = title.replace(/^\s*Topic\s+\d+\s*[:.\-–—]?\s*/i, '').trim()
  return stripped || title.trim()
}
