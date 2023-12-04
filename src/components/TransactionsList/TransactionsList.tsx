import TransactionGroup from './TransactionGroup'
import { useTransactionsContext } from '../../contexts/TransactionsContext'

const TransactionsList = () => {
  const { transactions } = useTransactionsContext()

  return (
    <div data-testid="transactions-list">
      {Object.keys(transactions).length === 0 ? (
        <p>No hay transacciones para mostrar</p>
      ) : (
        <div className="mt-5" style={{ marginBottom: '120px' }}>
          {Object.entries(transactions).map(([date, transactionList]) => (
            <TransactionGroup
              key={date}
              date={date}
              transactionList={transactionList}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TransactionsList
