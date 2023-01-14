import { ButtonHTMLAttributes, ReactElement } from 'react'
import './Button.scss'

export interface ButtonProps {
    className: string
    disabled?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    text?: string
    icon?: ReactElement
}

export const Button = ({
    className, 
    disabled, 
    onClick,
    text,
    icon,
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement> ) => {
  return (
    <button
    className={className}
    disabled={disabled}
    onClick={onClick}
    >
        {text}
        {icon}
    </button>
  )
}
