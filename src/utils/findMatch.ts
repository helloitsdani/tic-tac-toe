import { POSSIBLE_MATCHES } from '../constants'

import { BoardPosition, GameMovesType, MatchTuple, PlayerPiece } from '../types'

const isMatchInMoves = (match: BoardPosition[], moves: BoardPosition[]) =>
  match.every(position => moves.includes(position))

const findMatchInMoves = (moves: BoardPosition[]): MatchTuple | undefined =>
  Object.entries(POSSIBLE_MATCHES).find(([_, match]) => isMatchInMoves(match, moves)) as MatchTuple

const findMatch = (moves: GameMovesType) =>
  Object.keys(moves)
    .map(player => ({
      player,
      match: findMatchInMoves(moves[player as PlayerPiece]),
    }))
    .find(player => player.match !== undefined)

export { isMatchInMoves, findMatchInMoves }
export default findMatch
