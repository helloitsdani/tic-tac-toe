import React, { FunctionComponent, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BoardPosition, GameMovesType, GameStatus } from '../../types'
import { placePiece } from '../../store/actions'
import { getPlayers, getMoves, getStatus } from '../../store/selectors'

import { useBoardPositions } from './utils/getBoardPositionsFromMoves'
import isValidMove from './utils/isValidMove'
import { BOARD } from '../../constants'
import BoardSquare from '../../components/BoardSquare'

const Board: FunctionComponent = () => {
  const dispatch = useDispatch()
  const { active: activePlayer } = useSelector(getPlayers)
  const gameStatus = useSelector(getStatus)
  const moves = useSelector(getMoves)

  const onPositionSelect = useCallback(
    (position: BoardPosition) => {
      if (gameStatus !== GameStatus.PLAYING) {
        return
      }

      if (!isValidMove(position, moves)) {
        return
      }

      dispatch(placePiece(activePlayer, position))
    },
    [activePlayer, gameStatus, moves, dispatch]
  )

  const boardPositions = useBoardPositions(moves)

  return (
    <div className="c-game-board">
      {BOARD.map(position => (
        <BoardSquare key={position} onSelect={() => onPositionSelect(position)} player={boardPositions[position]} />
      ))}
    </div>
  )
}

export default Board
