import { PlayerId, BoardPosition, PlayerMatchType } from "../../types"

export const RESET_GAME = 'game/RESET'
export const PLACE_PIECE = 'game/PLACE_PIECE'
export const WIN_GAME = 'game/WIN'
export const CHANGE_PLAYER = 'player/CHANGE'

export interface ResetGameAction {
  type: typeof RESET_GAME
}

export interface PlacePieceAction {
  type: typeof PLACE_PIECE
  payload: {
    player: PlayerId,
    position: BoardPosition
  }
}

export interface WinGameAction {
  type: typeof WIN_GAME,
  payload: PlayerMatchType
}

export interface ChangePlayerAction {
  type: typeof CHANGE_PLAYER,
  payload: PlayerId
}

export type GameActions = ResetGameAction | PlacePieceAction | WinGameAction | ChangePlayerAction

export const resetGame = (): GameActions => ({
  type: RESET_GAME
})

export const placePiece = (player: PlayerId, position: BoardPosition): GameActions => ({
  type: PLACE_PIECE,
  payload: {
    player,
    position
  }
})

export const winGame = (winningMatch: PlayerMatchType): GameActions => ({
  type: WIN_GAME,
  payload: winningMatch,
})

export const changePlayer = (newPlayer: PlayerId): GameActions => ({
  type: CHANGE_PLAYER,
  payload: newPlayer,
})