import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from './Header'

describe('Header', () => {
  it('should render the component without a problem', () => {
    render(<Header />)
  })

  it('should display a list of the months', () => {
    render(<Header />)

    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ]

    months.forEach((month) => {
      const monthElement = screen.getByText(month)
      expect(monthElement).toBeInTheDocument()
    })
  })
})
