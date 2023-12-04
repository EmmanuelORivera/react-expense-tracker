import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  handleClick:
    | React.MouseEventHandler<HTMLButtonElement>
    | React.FormEventHandler<HTMLButtonElement>
  type?: 'primary' | 'secondary'
  className?: string
  style?: React.CSSProperties
}
const Button = ({
  type = 'primary',
  handleClick,
  children,
  className,
  style,
}: ButtonProps) => {
  const backgroundColor = type === 'primary' ? '#86a5ff' : 'transparent'
  const color = type === 'primary' ? 'white' : 'black'

  const buttonStyle: React.CSSProperties = {
    backgroundColor,
    color,
    fontWeight: 700,
    borderRadius: '8px',
    border: 'none',
  }
  return (
    <button
      onClick={handleClick}
      style={{ ...buttonStyle, ...style }}
      className={`${className}`}
    >
      {children}
    </button>
  )
}

export default Button
