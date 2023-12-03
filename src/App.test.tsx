import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should render the component without problems', () => {
    render(<App />)
    screen.debug()
  })
  it('should render a header with Hello world message', () => {
    render(<App />)
    const header = screen.getByText(/hello world!/i)
    expect(header).toBeInTheDocument()
  })
})
