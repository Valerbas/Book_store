import { ButtonHTMLAttributes, ReactElement } from 'react'
import './Button.scss'

export interface ButtonProps {
    className: string
    disabled?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    text?: string
    icon?: ReactElement
    children?: any
    link?: string
}

export const Button = ({
    className, 
    disabled, 
    onClick,
    text,
    icon,
    children,
    link,
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement> ) => {
  return (
    <button
    className={className}
    disabled={disabled}
    onClick={onClick}
    >
        {link}
        {children}
        {text}
        {icon}
    </button>
  )
}
