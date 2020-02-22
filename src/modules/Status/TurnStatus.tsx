import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { getPlayers } from '../../store/selectors'

const TurnStatus: FunctionComponent = () => {
  const { active } = useSelector(getPlayers)

  return (
    <div>
      {active}'s turn!
    </div>
  )
}

export default TurnStatus
