import { BoardPosition, GameMovesType } from '../types'

const isSpaceOccupied = (position: BoardPosition, game: GameMovesType) =>
  Object.values(game)
    .reduce((allMoves, playerMoves) => [...allMoves, ...playerMoves], [])
    .includes(position)

const isValidMove = (position: BoardPosition, game: GameMovesType) => !isSpaceOccupied(position, game)

export { isSpaceOccupied }
export default isValidMove
