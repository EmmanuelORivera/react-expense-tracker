interface ArrowProps {
  color?: string
}

const Arrow = ({ color = '#bbb' }: ArrowProps) => {
  return (
    <div
      data-testid="arrow"
      className="arrow"
      style={{ borderColor: color }}
    ></div>
  )
}

export default Arrow
