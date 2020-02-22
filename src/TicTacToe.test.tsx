import React from 'react'
import { render } from '@testing-library/react'

import TicTacToe from './TicTacToe'

describe('TicTacToe', () => {
  it('renders', () => {
    const { asFragment } = render(<TicTacToe />)
    expect(asFragment()).toMatchSnapshot()
  })
})