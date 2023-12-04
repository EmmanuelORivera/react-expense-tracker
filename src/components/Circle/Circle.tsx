import generatePastelColor from '../../utils/generatePastelColor'

const Circle = () => {
  return (
    <div
      data-testid="circle"
      style={{
        display: 'inline-block',
        padding: '1.2em',
        borderRadius: '50%',
        background: generatePastelColor(),
      }}
    ></div>
  )
}

export default Circle
