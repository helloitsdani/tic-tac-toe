import { BoardPosition } from '../../../types'
import isValidMove, { isSpaceOccupied } from './isValidMove'

describe('isSpaceOccupied', () => {
  const game = {
    PLAYER_ONE: [BoardPosition.BOTTOM_LEFT, BoardPosition.TOP_CENTRE],
    PLAYER_TWO: [BoardPosition.TOP_RIGHT, BoardPosition.MIDDLE_CENTRE],
  }

  it('returns true when the specified space is occupied in the provided game', () => {
    expect(isSpaceOccupied(BoardPosition.MIDDLE_CENTRE, game)).toBe(true)
  })

  it('returns false when the specified space is free', () => {
    expect(isSpaceOccupied(BoardPosition.BOTTOM_CENTRE, game)).toBe(false)
  })
})

describe('isValidMove', () => {
  const game = {
    PLAYER_ONE: [BoardPosition.TOP_LEFT, BoardPosition.TOP_CENTRE],
    PLAYER_TWO: [BoardPosition.TOP_RIGHT, BoardPosition.MIDDLE_RIGHT],
  }

  it('returns true when the specified space is empty in the provided game', () => {
    expect(isValidMove(BoardPosition.MIDDLE_CENTRE, game)).toBe(true)
  })

  it('returns false when the specified space is occupied', () => {
    expect(isValidMove(BoardPosition.TOP_LEFT, game)).toBe(false)
  })
})
