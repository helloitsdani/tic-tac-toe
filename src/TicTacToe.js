import React from 'react'
import { Provider } from 'react-redux'

import Game from './modules/Game'

import createStore from './store'

const TicTacToe = () => (
  <Provider store={createStore()}>
    <Game />
  </Provider>
)

export default TicTacToe