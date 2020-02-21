import React, { FunctionComponent } from 'react'
import { BoardPosition } from '../types'

interface BoardProps {
  onPositionSelect: (position: BoardPosition) => void
}

const Board: FunctionComponent<BoardProps> = ({
  onPositionSelect,
}) => (
  <div>
    <button onClick={() => onPositionSelect(BoardPosition.TOP_LEFT)}>Top left</button>
    <button onClick={() => onPositionSelect(BoardPosition.TOP_CENTRE)}>Top middle</button>
    <button onClick={() => onPositionSelect(BoardPosition.TOP_RIGHT)}>Top right</button>
  </div>
)

export default Board
