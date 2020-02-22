import React from 'react'
import { render } from '@testing-library/react'

import GameResult from './GameResult'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { PlayerId } from '../../types'

describe('GameResult', () => {
  const testPlayers = {
    active: PlayerId.PLAYER_ONE,
    all: [
      { piece: PlayerId.PLAYER_ONE, name: 'Test Player One' },
      { piece: PlayerId.PLAYER_TWO, name: 'Test Player Two' },
    ]
  }

  it('renders', () => {
    const testStore = createStore(() => ({
      winner: {
        player: PlayerId.PLAYER_ONE,
        match: [],
      },
      players: testPlayers,
    }))

    const { asFragment } = render(
      <Provider store={testStore}>
        <GameResult />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders a message for a draw', () => {
    const testStore = createStore(() => ({
      winner: null,
      players: testPlayers,
    }))

    const { getByTestId } = render(
      <Provider store={testStore}>
        <GameResult />
      </Provider>
    )
    
    expect(getByTestId('GameResult/Draw')).not.toBeNull()
  })

  it('renders a message when player one wins', () => {
    const testStore = createStore(() => ({
      winner: {
        player: PlayerId.PLAYER_ONE,
        match: [],
      },
      players: testPlayers,
    }))

    const { getByText } = render(
      <Provider store={testStore}>
        <GameResult />
      </Provider>
    )
    
    expect(getByText(testPlayers.all[0].name)).not.toBeNull()
  })

  it('renders a message when player two wins', () => {
    const testStore = createStore(() => ({
      winner: {
        player: PlayerId.PLAYER_TWO,
        match: [],
      },
      players: testPlayers,
    }))

    const { getByText } = render(
      <Provider store={testStore}>
        <GameResult />
      </Provider>
    )
    
    expect(getByText(testPlayers.all[1].name)).not.toBeNull()
  })
})
