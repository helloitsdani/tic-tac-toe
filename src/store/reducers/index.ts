import { combineReducers } from 'redux'

import moves from './moves'
import players from './players'
import winner from './winner'

export default combineReducers({
  moves,
  players,
  winner,
})
