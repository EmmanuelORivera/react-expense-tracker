import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { ModalProvider } from './contexts/ModalContext'

const MockProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransactionsProvider>
      <ModalProvider>{children}</ModalProvider>
    </TransactionsProvider>
  )
}
describe('App', () => {
  beforeEach(() => {
    render(
      <MockProviders>
        <App />
      </MockProviders>
    )
  })
  it('should render the component without problems', () => {})
  it('should render Header component', () => {
    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
  })

  it('should render Balance component', () => {
    const balance = screen.getByTestId('balance')
    expect(balance).toBeInTheDocument()
  })

  it('renders app compnent with container div', () => {
    const containerDiv = screen.getByTestId('app-container')

    expect(containerDiv).toBeInTheDocument()
    expect(containerDiv).toHaveClass('container')
  })

  it('should render TransactionsList component', () => {
    const transactionsList = screen.getByTestId('transactions-list')
    expect(transactionsList).toBeInTheDocument()
  })
})
