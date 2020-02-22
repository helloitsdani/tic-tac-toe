import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

import { PlayerId } from '../types'
import PlayerIcon from './PlayerIcon'

interface BoardSquareProps {
  player: PlayerId
  matched?: boolean
  onSelect: () => void
}

const BoardSquare: FunctionComponent<BoardSquareProps> = ({ player, matched, onSelect }) => (
  <button
    className={classnames('c-board-square', {
      'c-board-square--highlighted': matched,
      'u-player--player-one': player === PlayerId.PLAYER_ONE,
      'u-player--player-two': player === PlayerId.PLAYER_TWO,
    })}
    onClick={onSelect}
  >
    <PlayerIcon player={player} />
  </button>
)

export default BoardSquare
