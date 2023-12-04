import { ITransaction } from '../../interfaces/ITransaction'
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
  const amountColor = getAmountColor(transaction.amount)
  const amountText =
    transaction.amount > 0
      ? `+${transaction.amount.toFixed(2)}`
      : transaction.amount.toFixed(2)

  return (
    <li
      data-testid="transaction-item"
      className="transaction-group__list p-3 d-flex justify-content-between align-items-center"
      key={transaction.id}
    >
      <div className="d-flex justify-content-between align-items-center gap-2">
        <Circle />
        <span>{transaction.text}</span>
      </div>
      <span className="h3 fw-bold" style={{ color: amountColor }}>
        {amountText}
      </span>
    </li>
  )
}

export default TransactionItem
