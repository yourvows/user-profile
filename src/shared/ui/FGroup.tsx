import { FC, LabelHTMLAttributes, ReactNode } from 'react'

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  label: string
  is_required?: boolean
}

export const FormGroup: FC<Props> = ({
  children,
  label,
  is_required,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.htmlFor}>
        {label} {is_required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  )
}
