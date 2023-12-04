import { useModalContext } from './contexts/ModalContext'
import Balance from './components/Balance/Balance'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import TransactionsList from './components/TransactionsList/TransactionsList'
import FormModal from './components/FormModal/FormModal'

function App() {
  const { toggleModal } = useModalContext()

  return (
    <>
      <Header />
      <div data-testid="app-container" className="container">
        <Balance />
        <TransactionsList />
      </div>
      <Button
        style={{
          maxWidth: '400px',
          width: '100%',
          position: 'fixed',
          left: '50%',
          bottom: '2%',
          transform: 'translateX(-50%)',
          padding: '1rem 4rem',
        }}
        handleClick={toggleModal}
      >
        Agregar Movimiento
      </Button>

      <FormModal />
    </>
  )
}

export default App
