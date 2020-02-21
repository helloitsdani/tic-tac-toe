import winnerReducer, { defaultState } from './winner'
import { PlayerMatchType, MatchTuple, PlayerId } from '../../types'
import { resetGame, winGame } from '../actions'
import { POSSIBLE_MATCHES } from '../../constants'

describe('winner reducer', () => {
  it('responds to unknown actions with the current state', () => {
    const unknownAction = {
      type: 'not-the-game/PRETEND',
      payload: {
        hello: true,
      },
    } as any

    const currentState = {
      player: PlayerId.PLAYER_ONE,
      match: ['TOP_ROW', POSSIBLE_MATCHES.TOP_ROW] as MatchTuple,
    }

    expect(winnerReducer(currentState, unknownAction)).toEqual(currentState)
  })

  it('responds to game reset action with the default state', () => {
    const resetAction = resetGame()

    const currentState = {
      player: PlayerId.PLAYER_ONE,
      match: ['TOP_ROW', POSSIBLE_MATCHES.TOP_ROW] as MatchTuple,
    }

    expect(winnerReducer(currentState, resetAction)).toEqual(defaultState)
  })

  it('updates the current state in response to a game win action', () => {
    const winningMatch = {
      player: PlayerId.PLAYER_ONE,
      match: ['TOP_ROW', POSSIBLE_MATCHES.TOP_ROW] as MatchTuple,
    }

    const winningAction = winGame(winningMatch)

    expect(winnerReducer(defaultState, winningAction)).toEqual(winningMatch)
  })
})
