import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { getWinner } from '../../store/selectors'

const GameResult: FunctionComponent = () => {
  const winner = useSelector(getWinner)

  return winner ? <div>{winner.player} wins!</div> : <div>A draw...</div>
}

export default GameResult
