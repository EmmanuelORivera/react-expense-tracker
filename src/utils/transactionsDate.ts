import { ITransaction } from '../interfaces/ITransaction'

const formatTransactionKey = (date: Date): string =>
  date.toISOString().split('T')[0].split('-').join('/')

const groupTransactions = (
  transactions: ITransaction[]
): Record<string, ITransaction[]> => {
  const sortedTransactions = sortTransactionsByDate(transactions)

  return sortedTransactions.reduce((result, transaction) => {
    const key = formatTransactionKey(transaction.date)

    ;(result as Record<string, ITransaction[]>)[key] =
      (result as Record<string, ITransaction[]>)[key] || []
    ;(result as Record<string, ITransaction[]>)[key].push(transaction)

    return result
  }, {})
}
const sortTransactionsByDate = (transactions: ITransaction[]) =>
  transactions.slice().sort((a, b) => b.date.getTime() - a.date.getTime())

const getDaysPassed = (transactionDate: Date, currentDate: Date): number => {
  const timeDifference = currentDate.getTime() - transactionDate.getTime()

  return Math.floor(timeDifference / (1000 * 60 * 60 * 24))
}

const formatDateMessage = (date: string, currentDate: Date): string => {
  const givenDate = new Date(date)

  const daysPassed = getDaysPassed(givenDate, currentDate)
  const monthName = givenDate.toLocaleDateString('es-ES', { month: 'short' })

  if (daysPassed === 0) {
    return `Hoy - ${givenDate.getDate()} ${monthName}.`
  } else if (daysPassed === 1) {
    return `Ayer - ${givenDate.getDate()} ${monthName}.`
  } else {
    return `Hace ${daysPassed} dias - ${givenDate.getDate()} ${monthName}.`
  }
}

const transactionsDate = {
  groupTransactions,
  formatDateMessage,
  formatTransactionKey,
  sortTransactionsByDate,
  getDaysPassed,
}
export default transactionsDate
