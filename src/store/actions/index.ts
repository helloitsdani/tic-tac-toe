import { PlayerId, BoardPosition, PlayerMatchType } from '../../types'

export const PLACE_PIECE = 'game/PLACE_PIECE'
export const WIN_GAME = 'game/WIN'
export const FINISH_GAME = 'game/FINISH'
export const RESET_GAME = 'game/RESET'
export const CHANGE_PLAYER = 'game/CHANGE_PLAYER'

export interface PlacePieceAction {
  type: typeof PLACE_PIECE
  payload: {
    player: PlayerId
    position: BoardPosition
  }
}

export interface WinGameAction {
  type: typeof WIN_GAME
  payload: PlayerMatchType
}

export interface FinishGameAction {
  type: typeof FINISH_GAME
}

export interface ResetGameAction {
  type: typeof RESET_GAME
}

export interface ChangePlayerAction {
  type: typeof CHANGE_PLAYER
  payload: PlayerId
}

export type GameActions = PlacePieceAction | WinGameAction | FinishGameAction | ResetGameAction | ChangePlayerAction

export const placePiece = (player: PlayerId, position: BoardPosition): GameActions => ({
  type: PLACE_PIECE,
  payload: {
    player,
    position,
  },
})

export const winGame = (winningMatch: PlayerMatchType): GameActions => ({
  type: WIN_GAME,
  payload: winningMatch,
})

export const finishGame = (): GameActions => ({
  type: FINISH_GAME,
})

export const resetGame = (): GameActions => ({
  type: RESET_GAME,
})

export const changePlayer = (newPlayer: PlayerId): GameActions => ({
  type: CHANGE_PLAYER,
  payload: newPlayer,
})
