import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TransactionsList from './TransactionsList'

describe('TransactionsList', () => {
  it('should render the component without problems', () => {
    render(<TransactionsList />)
  })

  it('should display a message if there is no transactions', () => {
    render(<TransactionsList />)

    const paragraphElement = screen.getByText(
      /No hay transacciones para mostrar/i
    )

    expect(paragraphElement).toBeInTheDocument()
  })

  it('should display a transaction list', () => {
    render(<TransactionsList />)
    const paragraphElement = screen.getByText(
      /No hay transacciones para mostrar/i
    )

    expect(paragraphElement).not.toBeInTheDocument()
  })
})
