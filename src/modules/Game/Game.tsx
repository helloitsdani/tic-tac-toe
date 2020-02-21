import React, { useCallback, FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import Board from '../../components/Board'
import { BoardPosition, PlayerId } from '../../types'
import { placePiece } from '../../store/actions'

const Game: FunctionComponent = () => {
  const dispatch = useDispatch()
  const onPositionSelect = useCallback((position: BoardPosition) => {
    dispatch(placePiece(PlayerId.PLAYER_ONE, position))
  }, [dispatch])

  return <Board onPositionSelect={onPositionSelect} />
}

export default Game
