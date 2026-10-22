export function Prose({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/)
  return (
    <div className="space-y-4 text-[17px] leading-7 text-[#24364a]">
      {blocks.map((block) => {
        if (block.startsWith('Know this:')) {
          return (
            <aside
              key={block}
              className="rounded-xl border border-[#b7d0ea] bg-[#e7f1fb] px-4 py-3 text-[#1c3f66]"
            >
              <span className="font-semibold">Know this. </span>
              {block.slice('Know this:'.length).trim()}
            </aside>
          )
        }
        const lines = block.split('\n')
        if (lines.every((line) => line.startsWith('• '))) {
          return (
            <ul key={block} className="list-disc space-y-2 pl-5">
              {lines.map((line) => (
                <li key={line}>{line.slice(2)}</li>
              ))}
            </ul>
          )
        }
        return <p key={block}>{block}</p>
      })}
    </div>
  )
}
