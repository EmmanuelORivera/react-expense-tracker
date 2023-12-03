import { describe, it, expect } from 'vitest'
import transactionsDate from './transactionsDate'
import transactions from '../data/transactions'

describe('transactionsDate', () => {
  it('should group transactions by date', () => {
    const groupedTransactions = transactionsDate.groupTransactions(transactions)

    expect(Object.keys(groupedTransactions)).toHaveLength(9)
    expect(groupedTransactions['2023/10/31']).toHaveLength(1)
    expect(groupedTransactions['2023/12/01']).toHaveLength(1)
    expect(groupedTransactions['2023/10/25']).toHaveLength(1)
    expect(groupedTransactions['2023/11/02']).toHaveLength(3)
    expect(groupedTransactions['2023/10/30']).toHaveLength(1)
    expect(groupedTransactions['2023/10/28']).toHaveLength(1)
    expect(groupedTransactions['2023/10/29']).toHaveLength(1)
    expect(groupedTransactions['2023/12/03']).toHaveLength(1)
  })

  it('should format transaction key', () => {
    const date = new Date('2023-12-01')
    const formattedKey = transactionsDate.formatTransactionKey(date)

    expect(formattedKey).toEqual('2023/12/01')
  })

  it('should sort transactions by date', () => {
    const sortedTransactions =
      transactionsDate.sortTransactionsByDate(transactions)

    for (let i = 0; i < sortedTransactions.length - 1; i++) {
      const currentTimestamp = sortedTransactions[i].date.getTime()
      const nextTimestamp = sortedTransactions[i + 1].date.getTime()

      expect(currentTimestamp).toBeGreaterThanOrEqual(nextTimestamp)
    }
  })

  it('should calculate days passed', () => {
    const currentDate = new Date('2023-12-03')
    const transactionDate = new Date('2023-11-28')

    const daysPassed = transactionsDate.getDaysPassed(
      transactionDate,
      currentDate
    )

    expect(daysPassed).toEqual(5)
  })

  it('should format date message for today', () => {
    const currentDate = new Date('2023/12/03')
    const formatMessage = transactionsDate.formatDateMessage(
      currentDate.toISOString(),
      currentDate
    )

    expect(formatMessage).toEqual('Hoy - 3 dic.')
  })

  it('should format date message for other days', () => {
    const currentDate = new Date('2023/12/03')
    const transactionDate = new Date('2023/11/28')

    const formatDateMessage = transactionsDate.formatDateMessage(
      transactionDate.toISOString(),
      currentDate
    )

    expect(formatDateMessage).toEqual('Hace 5 dias - 28 nov.')
  })
})
