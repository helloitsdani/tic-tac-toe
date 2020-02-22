import React, { FunctionComponent } from 'react'
import { Provider } from 'react-redux'

import Game from './modules/Game'

import createStore from './store'
import Background from './components/Background'

const TicTacToe: FunctionComponent = () => (
  <Provider store={createStore()}>
    <Background />
    <div className="o-wrapper">
      <Game />
    </div>
  </Provider>
)

export default TicTacToe
