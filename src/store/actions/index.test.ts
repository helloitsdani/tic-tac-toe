import { resetGame, placePiece, winGame } from './index'
import { RESET_GAME, PLACE_PIECE, WIN_GAME } from '.'
import { BoardPosition, PlayerId, MatchTuple } from '../../types'
import { POSSIBLE_MATCHES } from '../../constants'

describe('resetGame', () => {
  it('creates reset game action correctly', () => {
    const expectedAction = {
      type: RESET_GAME,
    }

    expect(resetGame()).toMatchObject(expectedAction)
  })
})

describe('placePiece', () => {
  it('creates place piece action correctly', () => {
    const player = PlayerId.PLAYER_ONE
    const position = BoardPosition.TOP_LEFT

    const expectedAction = {
      type: PLACE_PIECE,
      payload: {
        player,
        position,
      },
    }

    expect(placePiece(player, position)).toMatchObject(expectedAction)
  })
})

describe('winGame', () => {
  it('creates win game action correctly', () => {
    const winningMatch = {
      player: PlayerId.PLAYER_TWO,
      match: ['TOP_ROW', POSSIBLE_MATCHES.TOP_ROW] as MatchTuple
    }

    const expectedAction = {
      type: WIN_GAME,
      payload: winningMatch,
    }

    expect(winGame(winningMatch)).toMatchObject(expectedAction)
  })
})
