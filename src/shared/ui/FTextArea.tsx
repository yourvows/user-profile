import { FC } from 'react'

interface Props {
  value: string
  id?: string
  onChange: (value: string) => void
}

export const FormTextarea: FC<Props> = ({ onChange, ...props }) => {
  return (
    <>
      <textarea
        {...props}
        className="flex min-h-[80px] w-full rounded-md border border-[#e2e8f0] bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-[#5e6d82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}
