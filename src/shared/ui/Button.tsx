import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClick?: () => void
  className?: string
  type?: 'submit' | 'reset' | 'button'
}
export const Button: FC<Props> = ({
  children,
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
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  )
}
