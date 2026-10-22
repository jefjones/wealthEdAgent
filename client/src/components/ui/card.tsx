import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils.ts'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('rounded-2xl border border-[#d5e2f0] bg-white shadow-[0_12px_40px_rgba(28,63,102,0.06)]', className)}
      {...props}
    />
  )
}
