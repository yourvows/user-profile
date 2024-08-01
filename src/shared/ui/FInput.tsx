import { FC, InputHTMLAttributes, forwardRef, LegacyRef } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  id?: string
  autoComplete?: string
  required?: boolean
  type?: string
  placeholder?: string
}
export const FromInput: FC<Props> = forwardRef(
  ({ ...props }, ref: LegacyRef<HTMLInputElement>) => {
    return (
      <>
        <input
          ref={ref}
          {...props}
          className="focus-visible:ring-ring flex h-10 w-full rounded-md border border-[#e2e8f0] bg-white px-3 py-2 text-sm ring-offset-white file:font-medium placeholder:text-[#5e6d82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </>
    )
  },
)
