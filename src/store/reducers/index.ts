import { combineReducers } from 'redux'

import moves from './moves'
import players from './players'
import status from './status'
import winner from './winner'

export default combineReducers({
  moves,
  players,
  status,
  winner,
})
