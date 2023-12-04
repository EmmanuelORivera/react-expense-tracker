import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TransactionItem from './TransactionItem'
import { ITransaction } from '../../interfaces/ITransaction'

describe('TransactionItem', () => {
  const transaction: ITransaction = {
    id: '1',
    text: 'Example Transaction',
    amount: 100,
    date: new Date(),
  }
  it('should render the component without a problem', () => {
    render(<TransactionItem transaction={transaction} />)
  })
  it('renders the transaction item correctly', () => {
    render(<TransactionItem transaction={transaction} />)

    const element = screen.getByText(/Example Transactions : 100/i)

    expect(element).toBeInTheDocument()
  })
})
