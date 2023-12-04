import { screen, render } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import Balance from './Balance'
import { TransactionsProvider } from '../../contexts/TransactionsContext'

const MockTransactionProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <TransactionsProvider>{children}</TransactionsProvider>
}

describe('Balance', () => {
  beforeEach(() => {
    render(
      <MockTransactionProvider>
        <Balance />
      </MockTransactionProvider>
    )
  })
  it('should render the component correctly', () => {})

  it('should display a header with the right text', () => {
    const header = screen.getByText(/balance del mes/i)
    expect(header).toBeInTheDocument()
  })

  it('should display a paragraph with the balance total', () => {
    const totalBalance = screen.getByText('$139.00')
    expect(totalBalance).toBeInTheDocument()
  })

  it('should display a header for incomes and his value', () => {
    const incomesHeader = screen.getByText('Ingresos')
    const incomesValue = screen.getByText('+$950.00')

    expect(incomesHeader).toBeInTheDocument()
    expect(incomesValue).toBeInTheDocument()
  })

  it.skip('should display a header for expenses and his value', () => {
    const incomesHeader = screen.getByText('Gastos')
    const incomesValue = screen.getByText('-$811.00')

    expect(incomesHeader).toBeInTheDocument()
    expect(incomesValue).toBeInTheDocument()
  })

  it('should render a paragraph with "Ver analiticas" message', () => {
    // render(<Balance />)

    const paragraphElement = screen.getByText(/ver analiticas/i)
    expect(paragraphElement).toBeInTheDocument()
  })

  it('should render an Arrow component', () => {
    const arrowComponent = screen.getByTestId('arrow')
    expect(arrowComponent).toBeInTheDocument()
  })
})
