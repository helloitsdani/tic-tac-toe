import { BoardPosition, MatchName } from './types'

export const BOARD: BoardPosition[] = [
  BoardPosition.TOP_LEFT,
  BoardPosition.TOP_CENTRE,
  BoardPosition.TOP_RIGHT,
  BoardPosition.MIDDLE_LEFT,
  BoardPosition.MIDDLE_CENTRE,
  BoardPosition.MIDDLE_RIGHT,
  BoardPosition.BOTTOM_LEFT,
  BoardPosition.BOTTOM_CENTRE,
  BoardPosition.BOTTOM_RIGHT,
]

export const POSSIBLE_MATCHES: Record<keyof typeof MatchName, BoardPosition[]> = {
  TOP_ROW: [BoardPosition.TOP_LEFT, BoardPosition.TOP_CENTRE, BoardPosition.TOP_RIGHT],
  MIDDLE_ROW: [BoardPosition.MIDDLE_LEFT, BoardPosition.MIDDLE_CENTRE, BoardPosition.MIDDLE_RIGHT],
  BOTTOM_ROW: [BoardPosition.BOTTOM_LEFT, BoardPosition.BOTTOM_CENTRE, BoardPosition.BOTTOM_RIGHT],
  LEFT_COLUMN: [BoardPosition.TOP_LEFT, BoardPosition.MIDDLE_LEFT, BoardPosition.BOTTOM_LEFT],
  CENTRE_COLUMN: [BoardPosition.TOP_CENTRE, BoardPosition.MIDDLE_CENTRE, BoardPosition.BOTTOM_CENTRE],
  RIGHT_COLUMN: [BoardPosition.TOP_RIGHT, BoardPosition.MIDDLE_RIGHT, BoardPosition.BOTTOM_RIGHT],
  DIAGONAL_LEFT_TO_RIGHT: [BoardPosition.TOP_LEFT, BoardPosition.MIDDLE_CENTRE, BoardPosition.BOTTOM_RIGHT],
  DIAGONAL_RIGHT_TO_LEFT: [BoardPosition.TOP_RIGHT, BoardPosition.MIDDLE_CENTRE, BoardPosition.BOTTOM_LEFT],
}