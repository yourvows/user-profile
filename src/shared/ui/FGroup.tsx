import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  name: string
  is_required?: boolean
}

export const FormGroup: FC<Props> = ({ children, name, is_required }) => {
  return (
    <div className="flex flex-col gap-2">
      <label>
        {name} {is_required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  )
}
