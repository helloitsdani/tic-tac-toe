import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import BoardSquare from './BoardSquare'
import { PlayerId } from '../types'

describe('BoardSquare', () => {
  it('renders', () => {
    const props = {
      player: PlayerId.PLAYER_ONE,
      onSelect: jest.fn(),
    }

    const { asFragment } = render(<BoardSquare {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('calls onSelect when clicked', () => {
    const props = {
      player: PlayerId.PLAYER_ONE,
      onSelect: jest.fn(),
    }

    const { getByRole } = render(<BoardSquare {...props} />)
    fireEvent.click(getByRole('button'))

    expect(props.onSelect).toHaveBeenCalled()
  })
})
