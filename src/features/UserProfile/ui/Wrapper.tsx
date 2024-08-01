import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}
export const Wrapper: FC<Props> = ({ children }) => {
  return (
    <div className="rounded-lg p-6 border bg-white text-black shadow-sm w-full max-w-md mx-auto">
      {children}
    </div>
  )
}
