import { FC } from 'react'
interface Props {
  className?: string
}
export const Spinner: FC<Props> = ({ className }) => {
  return (
    <div
      data-testid="spinner"
      className={`size-10 animate-spin rounded-full border-4 border-dotted border-black ${className}`}
    />
  )
}
