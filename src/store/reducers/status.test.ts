import statusReducer, { defaultState } from './status'
import { GameStatus } from '../../types'
import { resetGame, finishGame } from '../actions'

describe('status reducer', () => {
  it('responds to unknown actions with the current state', () => {
    const unknownAction = {
      type: 'not-the-game/PRETEND',
      payload: {
        hello: true,
      },
    } as any

    const currentState = GameStatus.PLAYING

    expect(statusReducer(currentState, unknownAction)).toEqual(currentState)
  })

  it('responds to game reset action with the default state', () => {
    const resetAction = resetGame()

    const currentState = GameStatus.FINISHED

    expect(statusReducer(currentState, resetAction)).toEqual(defaultState)
  })

  it('updates the current state in response to a finish game action', () => {
    const winningAction = finishGame()
    const expectedStatus = GameStatus.FINISHED

    expect(statusReducer(defaultState, winningAction)).toEqual(expectedStatus)
  })
})
