import { GameMovesType } from '../types'
import { BOARD } from '../constants'

const isBoardFull = (game: GameMovesType) => {
  const moves = Object.values(game)
    .reduce((allMoves, playerMoves) => [...allMoves, ...playerMoves], [])

  return BOARD.every(
    (position) => moves.includes(position)
  )
}

export default isBoardFull