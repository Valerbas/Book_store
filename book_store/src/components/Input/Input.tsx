import {type ChangeEvent} from 'react'
import './Input.scss'

type InputProps = {
    title?: string
    placeholder: string
    type?: string
    className?: string
    disabled?: boolean
    error?: boolean
    errorText?: string
    value?: string
    name?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({title, placeholder, className, type, disabled,error, errorText, value, name, onChange = () => {}}: InputProps) => {
    const id = String(Math.random() * 10)
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>
          {title}
      </label>
      <input
        id={id}
        className={`input__input ${error ? 'input__input--error' : null}`}
        type={type ?? 'text'}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
      <span className="input__error">{error && errorText}</span>
    </div>
  )
}