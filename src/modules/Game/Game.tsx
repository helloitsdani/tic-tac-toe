import React, { FunctionComponent } from 'react'
import Board from '../Board'
import Status from '../Status'

const Game: FunctionComponent = () => (
  <div className="o-game-column">
    <h1>Tic-tac-toe!</h1>
    <div className="o-game-columns__ui">
      <Board />
    </div>
    <div className="o-game-columns__menu">
      <Status />
    </div>
  </div>
)

export default Game
