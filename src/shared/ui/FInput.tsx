import { FC } from 'react'

interface Props {
  value: string
  id?: string
  autoComplete?: string
  required?: boolean
  type?: string
  placeholder?: string
  onChange: (value: string) => void
}
export const FromInput: FC<Props> = ({ onChange, ...props }) => {
  function handleChange(value: string) {
    onChange?.(value)
  }
  return (
    <>
      <input
        {...props}
        className="flex h-10 w-full rounded-md border border-[#e2e8f0] bg-white px-3 py-2 text-sm ring-offset-white file:font-medium placeholder:text-[#5e6d82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  )
}
