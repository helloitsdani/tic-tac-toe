import { PlayerId, GamePlayersType } from '../../types'
import { GameActions, CHANGE_PLAYER, RESET_GAME } from '../actions'

const defaultPlayers = [
  {
    piece: PlayerId.PLAYER_ONE,
    name: 'Player One',
  },
  {
    piece: PlayerId.PLAYER_TWO,
    name: 'Player Two',
  },
]

const defaultState = {
  active: defaultPlayers[0].piece,
  all: defaultPlayers,
}

const playersReducer = (state: GamePlayersType = defaultState, action: GameActions): GamePlayersType => {
  switch (action.type) {
    case CHANGE_PLAYER:
      return {
        ...state,
        active: action.payload,
      }
    case RESET_GAME:
      return defaultState
    default:
      return state
  }
}

export { defaultState }
export default playersReducer
