import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

import { PlayerId } from '../types'
import PlayerIcon from './PlayerIcon'

interface BoardSquareProps {
  player: PlayerId
  onSelect: () => void
}

const BoardSquare: FunctionComponent<BoardSquareProps> = ({ player, onSelect }) => (
  <button
    className={classnames('c-board-button', {
      'u-player--player-one': player === PlayerId.PLAYER_ONE,
      'u-player--player-two': player === PlayerId.PLAYER_TWO,
    })}
    onClick={onSelect}
  >
    <PlayerIcon player={player} />
  </button>
)

export default BoardSquare
