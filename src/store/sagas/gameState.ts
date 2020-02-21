import { call, takeEvery, select, put } from 'redux-saga/effects'
import { PLACE_PIECE, winGame } from '../actions'
import { getMoves } from '../selectors'
import findMatch from '../../utils/findMatch'

function* checkMovesForMatches() {
  const moves = yield select(getMoves)
  const match = yield call(findMatch, moves)

  if (match) {
    yield put(winGame(match))
  }
}

function* runGameState() {
  yield takeEvery(PLACE_PIECE, checkMovesForMatches)
}

export { checkMovesForMatches }
export default runGameState
