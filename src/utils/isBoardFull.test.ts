import { BoardPosition } from '../types'
import isBoardFull from './isBoardFull'

describe('isBoardFull', () => {
  it('returns true if all board positions have been filled', () => {
    const moves = {
      PLAYER_ONE: [
        BoardPosition.TOP_LEFT,
        BoardPosition.TOP_CENTRE,
        BoardPosition.TOP_RIGHT,
        BoardPosition.MIDDLE_CENTRE,
      ],
      PLAYER_TWO: [
        BoardPosition.MIDDLE_LEFT,
        BoardPosition.MIDDLE_RIGHT,
        BoardPosition.BOTTOM_LEFT,
        BoardPosition.BOTTOM_CENTRE,
        BoardPosition.BOTTOM_RIGHT,
      ],
    }

    expect(isBoardFull(moves)).toEqual(true)
  })

  it('returns false if not all board positions have been filled', () => {
    const moves = {
      PLAYER_ONE: [BoardPosition.TOP_LEFT],
      PLAYER_TWO: [],
    }

    expect(isBoardFull(moves)).toEqual(false)
  })
})
