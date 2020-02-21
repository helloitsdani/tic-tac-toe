export enum BoardPosition {
  TOP_LEFT,
  TOP_CENTRE,
  TOP_RIGHT,
  MIDDLE_LEFT,
  MIDDLE_CENTRE,
  MIDDLE_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_CENTRE,
  BOTTOM_RIGHT,
}

export enum PlayerPiece {
  PLAYER_ONE = 'PLAYER_ONE',
  PLAYER_TWO = 'PLAYER_TWO',
}

export enum MatchName {
  TOP_ROW = 'TOP_ROW',
  MIDDLE_ROW = 'MIDDLE_ROW',
  BOTTOM_ROW = 'BOTTOM_ROW',
  LEFT_COLUMN = 'LEFT_COLUMN',
  CENTRE_COLUMN = 'CENTRE_COLUMN',
  RIGHT_COLUMN = 'RIGHT_COLUMN',
  DIAGONAL_LEFT_TO_RIGHT = 'DIAGONAL_LEFT_TO_RIGHT',
  DIAGONAL_RIGHT_TO_LEFT = 'DIAGONAL_RIGHT_TO_LEFT',
}

export interface PlayerType {
  piece: PlayerPiece
  name: string
}

export type MatchTuple = [MatchName, BoardPosition[]]

export interface PlayerMatchType {
  match: MatchTuple
  piece: PlayerPiece
}

export type GameMovesType = Record<PlayerPiece, BoardPosition[]>

export interface GameStateType {
  players: PlayerType[]
  moves: GameMovesType
  winner: PlayerMatchType
}
