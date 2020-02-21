import { call, takeEvery, select, put } from 'redux-saga/effects'
import { PLACE_PIECE, winGame, changePlayer } from '../actions'
import { getMoves, getPlayers } from '../selectors'
import findMatch from '../../utils/findMatch'
import getNextPlayerId from '../../utils/getNextPlayerId'

function* checkMovesForMatches() {
  const moves = yield select(getMoves)
  const match = yield call(findMatch, moves)

  if (match) {
    yield put(winGame(match))
  }
}

function* switchActivePlayer() {
  const players = yield select(getPlayers)
  const nextPlayerId = yield call(getNextPlayerId, players.active, players.all)
  
  yield put(changePlayer(nextPlayerId))
}

function* runGameState() {
  yield takeEvery(PLACE_PIECE, checkMovesForMatches)
  yield takeEvery(PLACE_PIECE, switchActivePlayer)
}

export { checkMovesForMatches, switchActivePlayer }
export default runGameState
