import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlayers, getStatus, getMoves } from '../../../store/selectors'
import { BoardPosition, GameStatus, GameMovesType } from '../../../types'
import isValidMove from './isValidMove'
import { placePiece } from '../../../store/actions'
import getBoardPositionsFromMoves from './getBoardPositionsFromMoves'

const allowMove = (gameStatus: GameStatus, moves: GameMovesType, position: BoardPosition) => {
  if (gameStatus !== GameStatus.PLAYING) {
    return false
  }

  return isValidMove(position, moves)
}

const useBoard = () => {
  const dispatch = useDispatch()
  const { active: activePlayer } = useSelector(getPlayers)
  const gameStatus = useSelector(getStatus)

  const moves = useSelector(getMoves)
  const boardPositions = useMemo(() => getBoardPositionsFromMoves(moves), [moves])

  const onPositionSelect = useCallback(
    (position: BoardPosition) => {
      if (!allowMove(gameStatus, moves, position)) {
        return
      }

      dispatch(placePiece(activePlayer, position))
    },
    [activePlayer, gameStatus, moves, dispatch]
  )

  return [boardPositions, onPositionSelect] as const
}

export { allowMove }
export default useBoard
