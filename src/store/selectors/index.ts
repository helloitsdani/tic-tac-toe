import { GameStateType } from "../../types";

export const getPlayers = (state: GameStateType) => state.players
export const getMoves = (state: GameStateType) => state.moves