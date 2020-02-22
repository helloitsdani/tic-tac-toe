import { POSSIBLE_MATCHES } from '../constants'
import { BoardPosition, GameMovesType, MatchTuple, PlayerId, PlayerMatchType } from '../types'

const isMatchInMoves = (match: BoardPosition[], moves: BoardPosition[]) =>
  match.every(position => moves.includes(position))

const findMatchInMoves = (moves: BoardPosition[]): MatchTuple | undefined =>
  Object.entries(POSSIBLE_MATCHES).find(([_, match]) => isMatchInMoves(match, moves)) as MatchTuple

const findMatch = (game: GameMovesType): PlayerMatchType | undefined =>
  Object.entries(game)
    /* check every player in turn to see if their moves are a match */
    .map(([player, moves]) => ({
      player: player as PlayerId,
      match: findMatchInMoves(moves)!,
    }))
    /* filter out any players who didn't have a match */
    .find(player => player.match !== undefined)

export { isMatchInMoves, findMatchInMoves }
export default findMatch
