import React, { FunctionComponent } from 'react'

import { BOARD } from '../../constants'
import BoardSquare from '../../components/BoardSquare'
import BoardGrid from './BoardGrid'
import useBoard from './utils/useBoard'

const Board: FunctionComponent = () => {
  const [boardPositions, onPositionSelect] = useBoard()

  return (
    <div className="c-game-board">
      <BoardGrid />

      {BOARD.map(position => (
        <div key={position} className="c-game-board__square" data-testid="Board/Square">
          <BoardSquare onSelect={() => onPositionSelect(position)} player={boardPositions[position]} />
        </div>
      ))}
    </div>
  )
}

export default Board
