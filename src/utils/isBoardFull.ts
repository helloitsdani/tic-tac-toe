import { GameMovesType, BoardPosition } from '../types'

const isBoardFull = (game: GameMovesType) => {
  const moves = Object.values(game)
    .reduce((allMoves, playerMoves) => [...allMoves, ...playerMoves], [])

  return Object.values(BoardPosition).every(
    (position) => {
      if (isNaN(Number(position))) {
        return true
      }

      return moves.includes(position as BoardPosition)
    }
  )
}

export default isBoardFull