import React, { createContext, useContext, useEffect, useState } from 'react'
import { ITransaction } from '../interfaces/ITransaction'
import transactionsData from '../data/transactions'
import transactionsDate from '../utils/transactionsDate'

interface TransactionsContextProps {
  transactions: Record<string, ITransaction[]>
  setTransactions: React.Dispatch<
    React.SetStateAction<Record<string, ITransaction[]>>
  >
  total: number
  totalExpenses: number
  totalIncomes: number
  removeTransaction: (transactionId: string) => void
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

  const [total, setTotal] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [totalIncomes, setTotalIncomes] = useState(0)

  useEffect(() => {
    const groupedTransactions =
      transactionsDate.groupTransactions(transactionsData)
    setTransactions(groupedTransactions)
  }, [])

  useEffect(() => {
    let newTotal = 0
    let newTotalExpenses = 0
    let newTotalIncomes = 0

    for (const date in transactions) {
      const transactionList = transactions[date]

      transactionList.forEach((transaction) => {
        const amount = transaction.amount

        newTotal += amount

        if (amount < 0) {
          newTotalExpenses += amount
        } else {
          newTotalIncomes += amount
        }
      })
    }

    setTotal(newTotal)
    setTotalExpenses(newTotalExpenses)
    setTotalIncomes(newTotalIncomes)
  }, [transactions])

  const removeTransaction = (transactionId: string) => {
    setTransactions((prevTransactions) => {
      const updatedTransactions = { ...prevTransactions }

      for (const date in updatedTransactions) {
        updatedTransactions[date] = updatedTransactions[date].filter(
          (transaction) => transaction.id !== transactionId
        )
      }

      return updatedTransactions
    })
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
        total,
        totalExpenses,
        totalIncomes,
        removeTransaction,
      }}
    >
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
