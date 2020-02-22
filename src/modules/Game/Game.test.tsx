import React from 'react'
import { render } from '@testing-library/react'
import Game from './Game'
import { Provider } from 'react-redux'
import createGameStore from '../../store'

describe('Game', () => {
  it('renders', () => {
    const { asFragment } = render(
      <Provider store={createGameStore()}>
        <Game />
      </Provider>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
