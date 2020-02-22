import React, { FunctionComponent } from 'react'
import { PlayerId } from '../../types'
import X from './X'
import O from './O'

interface PlayerIconProps {
  player: PlayerId
}

const PlayerIcon: FunctionComponent<PlayerIconProps> = ({ player }) => {
  switch (player) {
    case PlayerId.PLAYER_ONE:
      return <X />
    case PlayerId.PLAYER_TWO:
      return <O />
    default:
      return <span />
  }
}

export default PlayerIcon
