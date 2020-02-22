import { useMemo } from 'react'
import { GameMovesType, BoardPosition, PlayerId } from '../../../types'

const getBoardPositionsFromMoves = (moves: GameMovesType) =>
  Object.entries(moves)
    /* convert arrays of moves to an object keyed by board position */
    .map(([player, playerMoves]) =>
      playerMoves.reduce(
        (allMoves, move) => ({
          ...allMoves,
          [move]: player,
        }),
        {} as Record<BoardPosition, PlayerId>
      )
    )
    /* merge all player moves into one object */
    .reduce(
      (allMoves, playerMoves) => ({
        ...allMoves,
        ...playerMoves,
      }),
      {} as Record<BoardPosition, PlayerId>
    )

const useBoardPositions = (moves: GameMovesType) => useMemo(() => getBoardPositionsFromMoves(moves), [moves])

export { useBoardPositions }
export default getBoardPositionsFromMoves
