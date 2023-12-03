import Arrow from '../Arrow/Arrow'

const Balance = () => {
  return (
    <div data-testid="balance" className="balance py-3 px-5">
      <h1 className="h5 fw-bold text-center">Balance del mes</h1>
      <p className="balance__total text-center h1 fw-bold">$1070.15</p>

      <div className="d-sm-flex text-center my-4">
        <div className="balance__income">
          <h3 className="h5">Ingresos</h3>
          <p className="h1 fw-bold">+$478.32</p>
        </div>
        <div className="balance__expenses mt-3 mt-sm-0">
          <h3 className="h5">Gastos</h3>
          <p className="h1 fw-bold">-$1452.50</p>
        </div>
      </div>

      <div className="text-center cursor-pointer">
        <p className="m-0 h6" style={{ color: '#bbb' }}>
          Ver analiticas
        </p>
        <Arrow />
      </div>
    </div>
  )
}

export default Balance
