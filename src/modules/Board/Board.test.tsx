import React from 'react'
import { render } from '@testing-library/react'

import Board from './Board'
import { BOARD } from '../../constants'
import useBoard from './utils/useBoard'

jest.mock('./utils/useBoard')

describe('Board', () => {
  beforeEach(() => {
    const useBoardMock = useBoard as jest.Mock
    useBoardMock.mockReturnValue([{}, jest.fn()])
  })

  it('renders', () => {
    const { asFragment } = render(<Board />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders a square for every board position', () => {
    const { queryAllByTestId } = render(<Board />)
    const boardPositions = queryAllByTestId('Board/Square')
    expect(boardPositions.length).toEqual(BOARD.length)
  })
})
