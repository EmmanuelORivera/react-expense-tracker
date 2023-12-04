import { useEffect, useState } from 'react'
import { ITransaction } from '../../interfaces/ITransaction'
import transactionsData from '../../data/transactions'
import transactionsDate from '../../utils/transactionsDate'
import TransactionGroup from './TransactionGroup'

const TransactionsList = () => {
  const [transactions, setTransactions] = useState<
    Record<string, ITransaction[]>
  >({})

  useEffect(() => {
    const groupedTransactions =
      transactionsDate.groupTransactions(transactionsData)
    setTransactions(groupedTransactions)
  }, [])

  return (
    <div data-testid="transactions-list">
      {Object.keys(transactions).length === 0 ? (
        <p>No hay transacciones para mostrar</p>
      ) : (
        <div className="mt-5">
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
