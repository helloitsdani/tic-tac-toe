import { call, takeEvery, select, put } from 'redux-saga/effects'
import findMatch from '../../utils/findMatch'
import getNextPlayerId from '../../utils/getNextPlayerId'
import { PLACE_PIECE, winGame, changePlayer, finishGame } from '../actions'
import { getMoves, getPlayers } from '../selectors'
import isBoardFull from '../../utils/isBoardFull'

function* checkMovesForMatches() {
  const moves = yield select(getMoves)
  const match = yield call(findMatch, moves)

  if (match) {
    yield put(winGame(match))
    yield put(finishGame())
    return
  }

  const boardFull = yield call(isBoardFull, moves)

  if (boardFull) {
    yield put(finishGame())
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
