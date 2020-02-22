import React, { FunctionComponent, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetGame } from '../../store/actions'
import { getStatus } from '../../store/selectors'
import { GameStatus } from '../../types'
import GameResult from './GameResult'
import TurnStatus from './TurnStatus'

const Status: FunctionComponent = () => {
  const dispatch = useDispatch()
  const onResetGame = useCallback(() => {
    dispatch(resetGame())
  }, [dispatch])

  const gameStatus = useSelector(getStatus)

  return (
    <div>
      {gameStatus === GameStatus.FINISHED ?  (
        <GameResult />
      ) : (
        <TurnStatus />
      )}

      <button className="c-button" onClick={onResetGame}>Start new game!</button>
    </div>
  )
}

export default Status
