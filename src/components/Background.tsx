import React, { FunctionComponent, useMemo } from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import { getWinner } from '../store/selectors'
import { PlayerId } from '../types'

const Background: FunctionComponent = () => {
  const winner = useSelector(getWinner)

  const winnerId = useMemo(() => {
    if (!winner) {
      return null
    }

    return winner.player
  }, [winner])

  return (
    <div
      className={classnames('c-background', {
        'c-background--player-one': winnerId === PlayerId.PLAYER_ONE,
        'c-background--player-two': winnerId === PlayerId.PLAYER_TWO,
      })}
    />
  )
}

export default Background
