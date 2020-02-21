import { PlayerId } from '../../types'

const defaultState = [
  {
    piece: PlayerId.PLAYER_ONE,
    name: 'Player One',
  },
  {
    piece: PlayerId.PLAYER_TWO,
    name: 'Player Two',
  },
]

const playersReducer = () => defaultState

export { defaultState }
export default playersReducer
