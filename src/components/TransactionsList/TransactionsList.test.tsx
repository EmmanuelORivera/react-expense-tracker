import { render } from '@testing-library/react'
import { describe, it, beforeAll } from 'vitest'
import TransactionsList from './TransactionsList'
import { TransactionsProvider } from '../../contexts/TransactionsContext'
import { ModalProvider } from '../../contexts/ModalContext'

const MockProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransactionsProvider>
      <ModalProvider>{children}</ModalProvider>
    </TransactionsProvider>
  )
}

describe('TransactionsList', () => {
  beforeAll(() => {
    render(
      <MockProviders>
        <TransactionsList />
      </MockProviders>
    )
  })
  it('should render the component without problems', () => {})
})
