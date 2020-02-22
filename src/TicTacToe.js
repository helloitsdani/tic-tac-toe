import React from 'react'
import { Provider } from 'react-redux'

import Game from './modules/Game'

import createStore from './store'

const TicTacToe = () => (
  <Provider store={createStore()}>
    <div className="c-background" />
    <div className="o-wrapper">
      <h1>Tic-tac-toe!</h1>
      <Game />
    </div>
  </Provider>
)

export default TicTacToe
