import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { Spinner } from '@/shared/ui'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  loading?: boolean
  onClick?: () => void
  className?: string
  type?: 'submit' | 'reset' | 'button'
}
export const Button: FC<Props> = ({
  children,
  loading,
  onClick,
  className,
  ...props
}) => {
  function handleClick() {
    if (onClick) onClick()
  }

  return (
    <button
      {...props}
      onClick={handleClick}
      className={`rounded bg-blue-500 px-4 py-2 font-bold text-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {loading ? <Spinner className="h-5 w-5 border-white" /> : children}
    </button>
  )
}
