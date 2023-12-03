const Header = () => {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]
  return (
    <header data-testid="header">
      <ul>
        {months.map((month, index) => (
          <li key={index}>{month}</li>
        ))}
      </ul>
    </header>
  )
}

export default Header
