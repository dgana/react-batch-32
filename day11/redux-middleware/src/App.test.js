import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('coba render dalem dom ada kata learn react gak', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
