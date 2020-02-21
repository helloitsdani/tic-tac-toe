import { PlayerType, PlayerId } from '../types'

const getNextPlayerId = (current: PlayerId, all: PlayerType[]) => {
  const currentIdx = all.findIndex(player => player.piece === current)

  if (currentIdx < 0) {
    return all[0].piece
  }
  
  const nextIdx = (currentIdx + 1) % all.length
  return all[nextIdx].piece
}

export default getNextPlayerId
