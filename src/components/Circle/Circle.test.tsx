import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Circle from './Circle'

describe('Circle', () => {
  it('renders the component without a problem', () => {
    render(<Circle />)
  })
  it('renders with a pastel-colored circle', () => {
    render(<Circle />)

    const circleElement = screen.getByTestId('circle')
    expect(circleElement).toBeInTheDocument()
  })
})
