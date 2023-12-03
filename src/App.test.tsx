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
})
