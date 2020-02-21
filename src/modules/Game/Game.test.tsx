import React from 'react'
import ReactDOM from 'react-dom'
import Game from './Game'
import createGameStore from '../../store'
import { Provider } from 'react-redux'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Provider store={createGameStore()}><Game /></Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
