import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Arrow from './Arrow'

describe('Arrow', () => {
  it('renders component without a problem', () => {
    render(<Arrow />)
  })
  it('renders with default color', () => {
    render(<Arrow />)

    const arrowElement = screen.getByTestId('arrow')
    expect(arrowElement).toBeInTheDocument()
    expect(arrowElement).toHaveStyle('border-color:#bbb')
  })

  it('renders with custom color', () => {
    const customColor = '#f00'
    render(<Arrow color={customColor} />)

    const arrowElement = screen.getByTestId('arrow')
    expect(arrowElement).toBeInTheDocument()
    expect(arrowElement).toHaveStyle(`border-color:${customColor}`)
  })
})
