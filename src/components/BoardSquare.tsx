import React, { FunctionComponent } from 'react'
import { PlayerId } from '../types'
import PlayerIcon from './PlayerIcon'

interface BoardSquareProps {
  player: PlayerId
  onSelect: () => void
}

const BoardSquare: FunctionComponent<BoardSquareProps> = ({
  player,
  onSelect,
}) => (
  <button onClick={onSelect}>
    <PlayerIcon player={player} />
  </button>
)

export default BoardSquare
