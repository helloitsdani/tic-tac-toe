import { BoardPosition, GameMovesType } from '../../../types'
import getBoardPositionsFromMoves from './getBoardPositionsFromMoves'

const isSpaceOccupied = (position: BoardPosition, game: GameMovesType) => {
  const board = getBoardPositionsFromMoves(game)
  return !!board[position]
}

const isValidMove = (position: BoardPosition, game: GameMovesType) => !isSpaceOccupied(position, game)

export { isSpaceOccupied }
export default isValidMove
