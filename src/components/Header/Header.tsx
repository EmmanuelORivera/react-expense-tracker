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
    <header data-testid="header" className="rounded-bottom-4">
      <ul className="d-flex list-unstyled h5 gap-5 text-white py-3 justify-content-around ">
        {months.map((month, index) => (
          <li key={index}>{month}</li>
        ))}
      </ul>
    </header>
  )
}

export default Header
