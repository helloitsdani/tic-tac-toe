import { BoardPosition, PlayerId } from '../../../types'
import getBoardPositionsFromMoves from './getBoardPositionsFromMoves'

describe('getBoardPositionsFromMoves', () => {
  it('converts a game moves object into a dictionary of game positions', () => {
    const moves = {
      [PlayerId.PLAYER_ONE]: [BoardPosition.MIDDLE_CENTRE, BoardPosition.MIDDLE_LEFT],
      [PlayerId.PLAYER_TWO]: [BoardPosition.BOTTOM_CENTRE],
    }

    const expectedBoardPositions = {
      [BoardPosition.MIDDLE_CENTRE]: PlayerId.PLAYER_ONE,
      [BoardPosition.MIDDLE_LEFT]: PlayerId.PLAYER_ONE,
      [BoardPosition.BOTTOM_CENTRE]: PlayerId.PLAYER_TWO,
    }

    expect(getBoardPositionsFromMoves(moves)).toMatchObject(expectedBoardPositions)
  })
})
