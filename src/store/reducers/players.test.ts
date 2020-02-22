import playersReducer, { defaultState } from './players'
import { PlayerId } from '../../types'
import { resetGame, changePlayer } from '../actions'

describe('players reducer', () => {
  it('returns the current state in response to an unknown action', () => {
    const unknownAction = {
      type: 'not-the-game/PRETEND',
      payload: {
        hello: true,
      },
    } as any

    const currentState = {
      active: PlayerId.PLAYER_ONE,
      all: [
        {
          piece: PlayerId.PLAYER_ONE,
          name: 'Test Player One',
        },
        {
          piece: PlayerId.PLAYER_TWO,
          name: 'Test Player Two',
        },
      ],
    }

    expect(playersReducer(currentState, unknownAction)).toEqual(currentState)
  })

  it('responds to game reset action with the default state', () => {
    const resetAction = resetGame()

    const currentState = {
      active: PlayerId.PLAYER_TWO,
      all: [
        {
          piece: PlayerId.PLAYER_ONE,
          name: 'Test Player One',
        },
        {
          piece: PlayerId.PLAYER_TWO,
          name: 'Test Player Two',
        },
      ],
    }

    expect(playersReducer(currentState, resetAction)).toEqual(defaultState)
  })

  it('updates the current state in response to a change player action', () => {
    const changePlayerAction = changePlayer(PlayerId.PLAYER_ONE)

    const currentState = {
      active: PlayerId.PLAYER_TWO,
      all: [
        {
          piece: PlayerId.PLAYER_ONE,
          name: 'Test Player One',
        },
        {
          piece: PlayerId.PLAYER_TWO,
          name: 'Test Player Two',
        },
      ],
    }

    const expectedState = {
      ...currentState,
      active: PlayerId.PLAYER_ONE,
    }

    expect(playersReducer(currentState, changePlayerAction)).toEqual(expectedState)
  })
})
