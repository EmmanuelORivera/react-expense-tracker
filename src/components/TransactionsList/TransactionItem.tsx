import { useTransactionsContext } from '../../contexts/TransactionsContext'
import { ITransaction } from '../../interfaces/ITransaction'
import Arrow from '../Arrow/Arrow'
import Button from '../Button/Button'
import Circle from '../Circle/Circle'

interface ITransactionItemProps {
  transaction: ITransaction
}

const getAmountColor = (amount: number) => {
  if (amount === 0) {
    return 'black'
  } else if (amount > 0) {
    return '#69c876'
  } else {
    return '#de696e'
  }
}

const TransactionItem = ({ transaction }: ITransactionItemProps) => {
  const { removeTransaction } = useTransactionsContext()

  const amountColor = getAmountColor(transaction.amount)
  const amountText =
    transaction.amount > 0
      ? `+${transaction.amount.toFixed(2)}`
      : transaction.amount.toFixed(2)

  return (
    <li
      data-testid="transaction-item"
      style={{ position: 'relative' }}
      className="transaction-group__list p-3 d-flex justify-content-between align-items-center"
      key={transaction.id}
    >
      <Button
        handleClick={() => removeTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </Button>
      <div className="d-flex justify-content-between align-items-center gap-2">
        <Circle />
        <span>{transaction.text}</span>
      </div>
      <span className="h3 fw-bold" style={{ color: amountColor }}>
        {amountText}
        <Arrow color="black" className="ms-4" />
      </span>
    </li>
  )
}

export default TransactionItem
