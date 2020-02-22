import React from 'react'
import { render } from '@testing-library/react'

import TurnStatus from './TurnStatus'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { PlayerId } from '../../types'

describe('TurnStatus', () => {
  const testPlayers = {
    active: PlayerId.PLAYER_ONE,
    all: [
      { piece: PlayerId.PLAYER_ONE, name: 'Test Player One' },
      { piece: PlayerId.PLAYER_TWO, name: 'Test Player Two' },
    ]
  }

  it('renders', () => {
    const testStore = createStore(() => ({
      players: testPlayers,
    }))

    const { asFragment } = render(
      <Provider store={testStore}>
        <TurnStatus />
      </Provider>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the name of the currently active player', () => {
    const testStore = createStore(() => ({
      players: testPlayers,
    }))

    const { getByText } = render(
      <Provider store={testStore}>
        <TurnStatus />
      </Provider>
    )
    
    expect(getByText(testPlayers.all[0].name)).not.toBeNull()
  })

  it('handles unknown players', () => {
    const testStore = createStore(() => ({
      players: {
        ...testPlayers,
        active: 'A_MYSTERY_PERSON',
      },
    }))

    const { getByTestId } = render(
      <Provider store={testStore}>
        <TurnStatus />
      </Provider>
    )
    
    expect(getByTestId('TurnStatus/UnknownPlayer')).not.toBeNull()
  })
})
