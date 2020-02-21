import { POSSIBLE_MATCHES } from '../constants'
import findMatch, { findMatchInMoves, isMatchInMoves } from './findMatch'

import { BoardPosition } from '../types'

describe('isMatchInMoves', () => {
  it('returns true if all match positions are in the provided move positions', () => {
    const matchPositions = [BoardPosition.TOP_LEFT, BoardPosition.BOTTOM_RIGHT]

    const movePositions = [
      BoardPosition.TOP_LEFT,
      BoardPosition.TOP_CENTRE,
      BoardPosition.BOTTOM_CENTRE,
      BoardPosition.BOTTOM_RIGHT,
    ]

    expect(isMatchInMoves(matchPositions, movePositions)).toBe(true)
  })

  it('returns false if not all match positions can be found', () => {
    const matchPositions = [BoardPosition.TOP_LEFT, BoardPosition.BOTTOM_RIGHT]

    const movePositions = [BoardPosition.TOP_LEFT, BoardPosition.TOP_CENTRE]

    expect(isMatchInMoves(matchPositions, movePositions)).toBe(false)
  })
})

describe('findMatchInMoves', () => {
  it('returns details of a match in the provided PlayerMoves set', () => {
    const moves = [BoardPosition.TOP_LEFT, ...POSSIBLE_MATCHES.CENTRE_COLUMN, BoardPosition.MIDDLE_RIGHT]
    const expectedMatch = ['CENTRE_COLUMN', POSSIBLE_MATCHES.CENTRE_COLUMN]

    expect(findMatchInMoves(moves)).toEqual(expectedMatch)
  })

  it('returns undefined if no matches can be found', () => {
    const moves = [
      BoardPosition.TOP_CENTRE,
      BoardPosition.MIDDLE_LEFT,
      BoardPosition.BOTTOM_RIGHT,
      BoardPosition.BOTTOM_LEFT,
    ]

    expect(findMatchInMoves(moves)).toEqual(undefined)
  })

  it('only returns details of the first found match', () => {
    const moves = [...POSSIBLE_MATCHES.TOP_ROW, ...POSSIBLE_MATCHES.BOTTOM_ROW]
    const expectedMatch = ['TOP_ROW', POSSIBLE_MATCHES.TOP_ROW]

    expect(findMatchInMoves(moves)).toEqual(expectedMatch)
  })
})

describe('findMatch', () => {
  it('returns a match if one can be found', () => {
    const gameMoves = {
      PLAYER_ONE: [...POSSIBLE_MATCHES.CENTRE_COLUMN],
      PLAYER_TWO: [BoardPosition.TOP_LEFT, BoardPosition.BOTTOM_LEFT],
    }

    const expectedMatch = {
      player: 'PLAYER_ONE',
      match: ['CENTRE_COLUMN', POSSIBLE_MATCHES.CENTRE_COLUMN],
    }

    expect(findMatch(gameMoves)).toEqual(expectedMatch)
  })

  it('can return a match for any player', () => {
    const gameMoves = {
      PLAYER_ONE: [BoardPosition.TOP_LEFT, BoardPosition.MIDDLE_LEFT, BoardPosition.BOTTOM_CENTRE],
      PLAYER_TWO: [...POSSIBLE_MATCHES.RIGHT_COLUMN],
    }

    const expectedMatch = {
      player: 'PLAYER_TWO',
      match: ['RIGHT_COLUMN', POSSIBLE_MATCHES.RIGHT_COLUMN],
    }

    expect(findMatch(gameMoves)).toEqual(expectedMatch)
  })

  it('returns undefined if no match can be found', () => {
    const gameMoves = {
      PLAYER_ONE: [BoardPosition.TOP_LEFT, BoardPosition.MIDDLE_LEFT],
      PLAYER_TWO: [BoardPosition.TOP_RIGHT, BoardPosition.MIDDLE_CENTRE],
    }

    expect(findMatch(gameMoves)).toEqual(undefined)
  })
})
