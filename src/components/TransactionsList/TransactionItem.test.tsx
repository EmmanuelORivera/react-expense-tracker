import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import TransactionItem from './TransactionItem'
import { ITransaction } from '../../interfaces/ITransaction'
import { TransactionsProvider } from '../../contexts/TransactionsContext'
import { ModalProvider } from '../../contexts/ModalContext'

const MockProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransactionsProvider>
      <ModalProvider>{children}</ModalProvider>
    </TransactionsProvider>
  )
}

describe('TransactionItem', () => {
  beforeEach(() => {
    render(
      <MockProviders>
        <TransactionItem transaction={transaction} />
      </MockProviders>
    )
  })
  const transaction: ITransaction = {
    id: '1',
    text: 'Example Transaction',
    amount: 100,
    date: new Date(),
  }
  it('should render the component without a problem', () => {})
  it('renders the transaction item correctly', () => {
    const element = screen.getByText(/Example Transaction/i)

    expect(element).toBeInTheDocument()
  })
})
