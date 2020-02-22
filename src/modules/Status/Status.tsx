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
    <>
      {gameStatus === GameStatus.FINISHED ? (
        <div data-testid="Status/GameResult" className="u-push-bottom">
          <GameResult />
        </div>
      ) : (
        <div data-testid="Status/TurnStatus" className="u-push-bottom">
          <TurnStatus />
        </div>
      )}

      <nav>
        <button className="c-button" onClick={onResetGame}>
          Start new game!
        </button>
      </nav>
    </>
  )
}

export default Status
