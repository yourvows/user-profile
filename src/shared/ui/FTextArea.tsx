import { FC, forwardRef, LegacyRef, TextareaHTMLAttributes } from 'react'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string
}

export const FormTextarea: FC<Props> = forwardRef(
  ({ ...props }, ref: LegacyRef<HTMLTextAreaElement>) => {
    return (
      <>
        <textarea
          {...props}
          ref={ref}
          className="flex min-h-[80px] w-full rounded-md border border-[#e2e8f0] bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-[#5e6d82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </>
    )
  },
)
