import { ITransaction } from '../../interfaces/ITransaction'
import transactionsDate from '../../utils/transactionsDate'
import TransactionItem from './TransactionItem'

interface ITransactionGroupProps {
  date: string
  transactionList: ITransaction[]
}

const TransactionGroup = ({
  date,
  transactionList,
}: ITransactionGroupProps) => {
  const currentDate = new Date()
  return (
    <div key={date} className="transaction-group">
      <p className="text-capitalize fw-bold m-0">{`${transactionsDate.formatDateMessage(
        date,
        currentDate
      )}`}</p>

      <ul className="list-unstyled">
        {transactionList.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  )
}

export default TransactionGroup
