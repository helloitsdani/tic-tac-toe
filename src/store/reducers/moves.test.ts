import movesReducer, { defaultState } from './moves'
import { BoardPosition, PlayerId } from '../../types'
import { resetGame, placePiece } from '../actions'

describe('movesReducer', () => {
  it('returns the current state in response to an unknown action', () => {
    const unknownAction = {
      type: 'not-the-game/PRETEND',
      payload: {
        hello: true,
      },
    } as any

    const currentState = {
      PLAYER_ONE: [BoardPosition.MIDDLE_CENTRE, BoardPosition.TOP_RIGHT],
      PLAYER_TWO: [BoardPosition.TOP_LEFT],
    }

    expect(movesReducer(currentState, unknownAction)).toEqual(currentState)
  })

  it('responds to game reset action with the default state', () => {
    const gameResetAction = resetGame()

    const currentState = {
      PLAYER_ONE: [BoardPosition.MIDDLE_CENTRE, BoardPosition.TOP_RIGHT],
      PLAYER_TWO: [BoardPosition.TOP_LEFT],
    }

    expect(movesReducer(currentState, gameResetAction)).toEqual(defaultState)
  })

  it('updates the current state in response to a place piece action', () => {
    const placePieceAction = placePiece(PlayerId.PLAYER_TWO, BoardPosition.BOTTOM_LEFT)

    const currentState = {
      PLAYER_ONE: [BoardPosition.MIDDLE_CENTRE, BoardPosition.TOP_RIGHT],
      PLAYER_TWO: [BoardPosition.TOP_LEFT],
    }

    const expectedState = {
      ...currentState,
      PLAYER_TWO: [...currentState.PLAYER_TWO, BoardPosition.BOTTOM_LEFT],
    }

    expect(movesReducer(currentState, placePieceAction)).toEqual(expectedState)
  })
})
