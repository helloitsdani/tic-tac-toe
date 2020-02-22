import React, { FunctionComponent, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getPlayers } from '../../store/selectors'

const TurnStatus: FunctionComponent = () => {
  const { active } = useSelector(getPlayers)
  const players = useSelector(getPlayers)

  const player = useMemo(() => players.all.find(p => p.piece === active), [active, players])

  return (
    <div data-testid="TurnStatus">
      {player ? (
        <>
          <span data-testid="TurnStatus/Player">{player.name}</span>'s turn!
        </>
      ) : (
        <span data-testid="TurnStatus/UnknownPlayer">Your turn!</span>
      )}
    </div>
  )
}

export default TurnStatus
