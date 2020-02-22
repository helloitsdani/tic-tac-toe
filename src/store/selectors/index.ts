import { GameStateType } from "../../types";

export const getPlayers = (state: GameStateType) => state.players
export const getMoves = (state: GameStateType) => state.moves
export const getStatus = (state: GameStateType) => state.status
export const getWinner = (state: GameStateType) => state.winner