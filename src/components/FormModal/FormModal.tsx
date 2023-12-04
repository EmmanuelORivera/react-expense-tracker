import Modal from 'react-modal'
import { useModalContext } from '../../contexts/ModalContext'
import Button from '../Button/Button'
import TransactionForm from '../TransactionForm/TransactionForm'

const FormModal = () => {
  const { modalIsOpen, toggleModal } = useModalContext()
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={toggleModal}>
      <Button
        className="position-absolute"
        style={{
          right: '2%',
          padding: '.5rem',
          borderRadius: '50%',
        }}
        type="secondary"
        handleClick={toggleModal}
      >
        X
      </Button>

      <div className="container">
        <h2 className="mt-5 pb-2 border-bottom">Agregar nueva transaccion</h2>
        <TransactionForm />
      </div>
    </Modal>
  )
}

export default FormModal
