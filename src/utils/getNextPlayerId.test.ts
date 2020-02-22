import getNextPlayerId from './getNextPlayerId'
import { PlayerId } from '../types'

describe('getNextPlayerId', () => {
  const mockPlayers = [
    {
      piece: PlayerId.PLAYER_ONE,
      name: 'Test Player One',
    },
    {
      piece: PlayerId.PLAYER_TWO,
      name: 'Test Player Two',
    },
  ]

  it('returns the piece of the next available player in the provided list', () => {
    expect(getNextPlayerId(PlayerId.PLAYER_ONE, mockPlayers)).toEqual(PlayerId.PLAYER_TWO)
  })

  it('wraps around if the current player is the last in the provided list', () => {
    expect(getNextPlayerId(PlayerId.PLAYER_TWO, mockPlayers)).toEqual(PlayerId.PLAYER_ONE)
  })

  it('falls back to the first player in the provided list if the current cannot be found', () => {
    expect(getNextPlayerId('a made up player' as any, mockPlayers)).toEqual(PlayerId.PLAYER_ONE)
  })
})
