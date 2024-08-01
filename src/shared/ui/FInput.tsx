import { FC } from 'react'

interface Props {
  value: string
  required?: boolean
  onChange: (value: string) => void
  type?: string
  autoComplete?: string
}
export const FromInput: FC<Props> = ({ value, onChange, required, type, autoComplete }) => {
  return (
    <>
      <input
        className="flex h-10 w-full rounded-md border border-[#e2e8f0] bg-white px-3 py-2 text-sm ring-offset-white file:font-medium placeholder:text-[#5e6d82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </>
  )
}
