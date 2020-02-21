import { call, takeEvery, select, put } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers';

import { checkMovesForMatches } from './gameState'
import { getMoves } from '../selectors'
import findMatch from '../../utils/findMatch'
import { BoardPosition, PlayerId, MatchTuple } from '../../types'
import { POSSIBLE_MATCHES } from '../../constants';
import { winGame } from '../actions';

describe('gameState', () => {
  it('checks for matches when the saga is run', () => {
    const fakeMoves = {
      PLAYER_ONE: [BoardPosition.MIDDLE_CENTRE],
      PLAYER_TWO: [],
    }

    return expectSaga(checkMovesForMatches)
      .provide([
        [matchers.select.selector(getMoves), fakeMoves]
      ])
      .select(getMoves)
      .call(findMatch, fakeMoves)
      .run()
  })

  it('dispatches win game event if a match is found', () => {
    const fakeMoves = {
      PLAYER_ONE: [BoardPosition.MIDDLE_CENTRE, BoardPosition.TOP_LEFT],
      PLAYER_TWO: [...POSSIBLE_MATCHES.RIGHT_COLUMN],
    }

    const expectedWin = {
      player: PlayerId.PLAYER_TWO,
      match: ['RIGHT_COLUMN', POSSIBLE_MATCHES.RIGHT_COLUMN] as MatchTuple
    }

    return expectSaga(checkMovesForMatches)
      .provide([
        [matchers.select.selector(getMoves), fakeMoves]
      ])
      .select(getMoves)
      .call(findMatch, fakeMoves)
      .put(winGame(expectedWin))
      .run()
  })
})
