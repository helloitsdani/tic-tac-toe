import { getMoves } from './index'
import { PlayerId, BoardPosition } from '../../types'

const mockState = {
  players: [
    {
      piece: PlayerId.PLAYER_ONE,
      name: 'Player One',
    },
    {
      piece: PlayerId.PLAYER_TWO,
      name: 'Player Two',
    },
  ],
  moves: {
    PLAYER_ONE: [BoardPosition.TOP_LEFT, BoardPosition.MIDDLE_CENTRE],
    PLAYER_TWO: [BoardPosition.MIDDLE_CENTRE],
  },
  winner: null,
}

describe('getMoves', () => {
  it('returns current moves from the state', () => {
    expect(getMoves(mockState)).toEqual(mockState.moves)
  })
})
