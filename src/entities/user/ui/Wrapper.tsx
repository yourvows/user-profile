import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}
export const Wrapper: FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto max-w-md rounded-lg border bg-white p-6 text-black shadow-sm">
      {children}
    </div>
  )
}
