import React, { useState } from 'react'
import Button from '../Button/Button'
import { toast } from 'react-toastify'
import { useModalContext } from '../../contexts/ModalContext'
import { useTransactionsContext } from '../../contexts/TransactionsContext'
import transactionsDate from '../../utils/transactionsDate'
import { ITransaction } from '../../interfaces/ITransaction'

const TransactionForm = () => {
  const { setTransactions } = useTransactionsContext()
  const { toggleModal } = useModalContext()
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent<any>) => {
    e.preventDefault()

    if (!text || !amount) {
      toast.error('Error en Concepto o Monto favor de revisar los campos')
      return
    }
    console.log('submit')
    toggleModal()
    toast.success('Se ha agregado un nuevo movimiento a la lista')

    const formattedDate = transactionsDate.formatTransactionKey(new Date())
    setTransactions((prevTransactions) => {
      const updatedTransactions = { ...prevTransactions }
      const newTransaction: ITransaction = {
        amount: Number(amount),
        text,
        date: new Date(),
        id: String(Math.floor(Math.random() * 1000000)),
      }

      if (updatedTransactions[formattedDate]) {
        updatedTransactions[formattedDate].push(newTransaction)
      } else {
        updatedTransactions[formattedDate] = [newTransaction]
      }

      return updatedTransactions
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className="h3 w-100 mt-4" htmlFor="text">
        Concepto
        <input
          className="w-100 px-2 mt-2"
          type="text"
          name="text"
          id="text"
          onChange={(e) => setText(e.target.value)}
        />
      </label>

      <label className="h3 w-100 mt-4" htmlFor="amount">
        Monto (negativo - gasto, positivo - ingreso)
        <input
          className="w-100 px-2 mt-2"
          type="number"
          name="amount"
          id="amount"
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <Button
        style={{
          position: 'absolute',
          bottom: '2%',
          left: '50%',
          padding: '1rem 2rem',
          width: '400px',
          transform: 'translateX(-50%)',
        }}
        handleClick={handleSubmit}
      >
        Agregar
      </Button>
    </form>
  )
}

export default TransactionForm
