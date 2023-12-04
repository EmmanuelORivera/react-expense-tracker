import React, { createContext, useContext, useEffect, useState } from 'react'
import { ITransaction } from '../interfaces/ITransaction'
import transactionsData from '../data/transactions'
import transactionsDate from '../utils/transactionsDate'

interface TransactionsContextProps {
  transactions: Record<string, ITransaction[]>
  setTransactions: React.Dispatch<
    React.SetStateAction<Record<string, ITransaction[]>>
  >
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

const TransactionsContext = createContext<TransactionsContextProps | undefined>(
  undefined
)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<
    Record<string, ITransaction[]>
  >({})

  useEffect(() => {
    const groupedTransactions =
      transactionsDate.groupTransactions(transactionsData)
    setTransactions(groupedTransactions)
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactionsContext = () => {
  const context = useContext(TransactionsContext)
  if (!context) {
    throw new Error(
      'useTransactionsContext must be used within a TransactionsProvider'
    )
  }

  return context
}
