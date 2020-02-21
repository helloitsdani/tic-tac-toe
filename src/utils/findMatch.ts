import { POSSIBLE_MATCHES } from '../constants'
import { BoardPosition, GameMovesType, MatchTuple, PlayerId, PlayerMatchType } from '../types'

const isMatchInMoves = (match: BoardPosition[], moves: BoardPosition[]) =>
  match.every(position => moves.includes(position))

const findMatchInMoves = (moves: BoardPosition[]): MatchTuple | undefined =>
  Object.entries(POSSIBLE_MATCHES).find(([_, match]) => isMatchInMoves(match, moves)) as MatchTuple

const findMatch = (game: GameMovesType): PlayerMatchType | undefined =>
  Object.entries(game)
    .map(([player, moves]) => ({
      player: player as PlayerId,
      match: findMatchInMoves(moves)!,
    }))
    .find(player => player.match !== undefined)

export { isMatchInMoves, findMatchInMoves }
export default findMatch
