import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Balance from './Balance'

describe('Balance', () => {
  it('should render the component correctly', () => {
    render(<Balance />)
  })

  it('should display a header with the right text', () => {
    render(<Balance />)

    const header = screen.getByText(/balance del mes/i)
    expect(header).toBeInTheDocument()
  })

  it('should display a paragraph with the balance total', () => {
    render(<Balance />)

    const totalBalance = screen.getByText('$1070.15')
    expect(totalBalance).toBeInTheDocument()
  })

  it('should display a header for incomes and his value', () => {
    render(<Balance />)

    const incomesHeader = screen.getByText('Ingresos')
    const incomesValue = screen.getByText('+$478.32')

    expect(incomesHeader).toBeInTheDocument()
    expect(incomesValue).toBeInTheDocument()
  })

  it('should display a header for expenses and his value', () => {
    render(<Balance />)

    const incomesHeader = screen.getByText('Gastos')
    const incomesValue = screen.getByText('-$1452.50')

    expect(incomesHeader).toBeInTheDocument()
    expect(incomesValue).toBeInTheDocument()
  })

  it('should render a paragraph with "Ver analiticas" message', () => {
    render(<Balance />)

    const paragraphElement = screen.getByText(/ver analiticas/i)
    expect(paragraphElement).toBeInTheDocument()
  })

  it('should render an Arrow component', () => {
    render(<Balance />)

    const arrowComponent = screen.getByTestId('arrow')
    expect(arrowComponent).toBeInTheDocument()
  })
})
