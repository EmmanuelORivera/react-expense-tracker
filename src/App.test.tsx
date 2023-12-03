import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should render the component without problems', () => {
    render(<App />)
    screen.debug()
  })
  it('should render Header component', () => {
    render(<App />)
    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
  })

  it('should render Balance component', () => {
    render(<App />)
    const balance = screen.getByTestId('balance')
    expect(balance).toBeInTheDocument()
  })

  it('renders app compnent with container div', () => {
    render(<App />)

    const containerDiv = screen.getByTestId('app-container')

    expect(containerDiv).toBeInTheDocument()
    expect(containerDiv).toHaveClass('container')
  })

  it('should render TransactionsList component', () => {
    render(<App />)
    const transactionsList = screen.getByTestId('transactions-list')
    expect(transactionsList).toBeInTheDocument()
  })
})
