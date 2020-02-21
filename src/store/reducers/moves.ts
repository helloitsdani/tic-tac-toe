import { GameMovesType } from '../../types'
import { GameActions, PLACE_PIECE, RESET_GAME } from '../actions'

const defaultState = {
  PLAYER_ONE: [],
  PLAYER_TWO: [],
}

const movesReducer = (state: GameMovesType = defaultState, action: GameActions) => {
  switch (action.type) {
    case PLACE_PIECE:
      const { player, position } = action.payload

      return {
        ...state,
        [player]: [...state[player], position],
      }
    case RESET_GAME:
      return defaultState
    default:
      return state
  }
}

export { defaultState }
export default movesReducer
