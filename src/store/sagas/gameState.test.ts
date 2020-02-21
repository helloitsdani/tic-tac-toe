import { call, takeEvery, select, put } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers';

import { checkMovesForMatches, switchActivePlayer } from './gameState'
import { getMoves, getPlayers } from '../selectors'
import findMatch from '../../utils/findMatch'
import { BoardPosition, PlayerId, MatchTuple } from '../../types'
import { POSSIBLE_MATCHES } from '../../constants';
import { winGame, changePlayer } from '../actions';
import getNextPlayerId from '../../utils/getNextPlayerId';

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

describe('switchActivePlayer', () => {
  it('changes the active player after every piece played', () => {
    const fakePlayers = {
      active: PlayerId.PLAYER_TWO,
      all: [
        { piece: PlayerId.PLAYER_ONE, name: 'Test Player One' },
        { piece: PlayerId.PLAYER_TWO, name: 'Test Player Two' },
      ]
    }

    return expectSaga(switchActivePlayer)
      .provide([
        [matchers.select.selector(getPlayers), fakePlayers]
      ])
      .select(getPlayers)
      .call(getNextPlayerId, fakePlayers.active, fakePlayers.all)
      .put(changePlayer(PlayerId.PLAYER_ONE))
      .run()
  })
})