import type { InputHTMLAttributes } from 'react'
import { cn } from '../../lib/utils.ts'

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'flex h-11 w-full rounded-xl border border-[#c5d5e8] bg-white px-3 text-base text-[#172033] shadow-sm outline-none transition placeholder:text-[#8aa0b8] focus:border-[#2a6cb5] focus:ring-2 focus:ring-[#2a6cb5]/25 disabled:opacity-60',
        className,
      )}
      {...props}
    />
  )
}
