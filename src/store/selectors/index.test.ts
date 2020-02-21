import { getMoves, getPlayers } from './index'
import { PlayerId, BoardPosition, GameStatus } from '../../types'

const mockState = {
  players: {
    active: PlayerId.PLAYER_ONE,
    all: [
      {
        piece: PlayerId.PLAYER_ONE,
        name: 'Player One',
      },
      {
        piece: PlayerId.PLAYER_TWO,
        name: 'Player Two',
      },
    ],
  },
  moves: {
    PLAYER_ONE: [BoardPosition.TOP_LEFT, BoardPosition.MIDDLE_CENTRE],
    PLAYER_TWO: [BoardPosition.MIDDLE_CENTRE],
  },
  winner: null,
  status: GameStatus.PLAYING,
}

describe('getPlayers', () => {
  it('returns the current players from the state', () => {
    expect(getPlayers(mockState)).toEqual(mockState.players)
  })
})

describe('getMoves', () => {
  it('returns current moves from the state', () => {
    expect(getMoves(mockState)).toEqual(mockState.moves)
  })
})
