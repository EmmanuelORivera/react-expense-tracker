interface ArrowProps {
  color?: string
  className?: string
}

const Arrow = ({ color = '#bbb', className = '' }: ArrowProps) => {
  return (
    <div
      data-testid="arrow"
      className={`${className} arrow`}
      style={{ borderColor: color }}
    ></div>
  )
}

export default Arrow
