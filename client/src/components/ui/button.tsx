import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils.ts'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#2a6cb5] text-white hover:bg-[#1f5a9a] focus-visible:ring-[#2a6cb5]',
        outline:
          'border border-[#c5d5e8] bg-white text-[#1c3f66] hover:bg-[#f3f7fc] focus-visible:ring-[#2a6cb5]',
        ghost: 'text-[#1c3f66] hover:bg-[#e7f0fa] focus-visible:ring-[#2a6cb5]',
        correct: 'bg-[#157a43] text-white hover:bg-[#116838]',
        danger: 'bg-[#a32626] text-white hover:bg-[#7e1c1c] focus-visible:ring-[#a32626]',
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 px-3 text-xs',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
