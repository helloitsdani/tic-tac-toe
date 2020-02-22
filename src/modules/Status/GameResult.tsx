import React, { FunctionComponent, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getWinner, getPlayers } from '../../store/selectors'

const GameResult: FunctionComponent = () => {
  const winner = useSelector(getWinner)
  const players = useSelector(getPlayers)

  const player = useMemo(() => {
    if (!winner) {
      return null
    }

    return players.all.find(p => p.piece === winner!.player)
  }, [winner, players])

  return player ? (
    <div data-testid="GameResult/Player">
      <span data-testid="GameResult/PlayerName">{player.name}</span> wins!
    </div>
  ) : (
    <div data-testid="GameResult/Draw">A draw...</div>
  )
}

export default GameResult
