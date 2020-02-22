import { PlayerMatchType } from '../../types'
import { GameActions, RESET_GAME, WIN_GAME } from '../actions'

const defaultState = null

const winnerReducer = (state: PlayerMatchType | null = defaultState, action: GameActions): PlayerMatchType | null => {
  switch (action.type) {
    case WIN_GAME:
      return action.payload
    case RESET_GAME:
      return defaultState
    default:
      return state
  }
}

export { defaultState }
export default winnerReducer
