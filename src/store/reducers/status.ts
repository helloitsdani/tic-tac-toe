import { GameStatus } from '../../types'
import { GameActions, FINISH_GAME, RESET_GAME } from '../actions'

const defaultState = GameStatus.PLAYING

const movesReducer = (state: GameStatus = defaultState, action: GameActions) => {
  switch (action.type) {
    case FINISH_GAME:
      return GameStatus.FINISHED
    case RESET_GAME:
      return GameStatus.PLAYING
    default:
      return state
  }
}

export { defaultState }
export default movesReducer
