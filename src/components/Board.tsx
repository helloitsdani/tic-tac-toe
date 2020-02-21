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
    <button onClick={() => onPositionSelect(BoardPosition.TOP_CENTRE)}>Top centre</button>
    <button onClick={() => onPositionSelect(BoardPosition.TOP_RIGHT)}>Top right</button>
    <br />
    <button onClick={() => onPositionSelect(BoardPosition.MIDDLE_LEFT)}>Middle left</button>
    <button onClick={() => onPositionSelect(BoardPosition.MIDDLE_CENTRE)}>Middle centre</button>
    <button onClick={() => onPositionSelect(BoardPosition.MIDDLE_RIGHT)}>Middle right</button>
    <br />
    <button onClick={() => onPositionSelect(BoardPosition.BOTTOM_LEFT)}>Bottom left</button>
    <button onClick={() => onPositionSelect(BoardPosition.BOTTOM_CENTRE)}>Bottom centre</button>
    <button onClick={() => onPositionSelect(BoardPosition.BOTTOM_RIGHT)}>Bottom right</button>
  </div>
)

export default Board
