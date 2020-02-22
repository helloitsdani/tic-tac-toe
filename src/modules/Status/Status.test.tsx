import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Status from './Status'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { PlayerId, GameStateType, GameStatus, BoardPosition } from '../../types'

import { resetGame } from '../../store/actions'

jest.mock('../../store/actions')

jest.mock('')

describe('Status', () => {
  const testState: GameStateType = {
    players: {
      active: PlayerId.PLAYER_ONE,
      all: [
        { piece: PlayerId.PLAYER_ONE, name: 'Test Player One' },
        { piece: PlayerId.PLAYER_TWO, name: 'Test Player Two' },
      ]
    },
    status: GameStatus.PLAYING,
    winner: null,
    moves: {
      PLAYER_ONE: [BoardPosition.MIDDLE_CENTRE],
      PLAYER_TWO: [],
    },
  }

  it('renders', () => {
    const { asFragment } = render(
      <Provider store={createStore(() => testState)}>
        <Status />
      </Provider>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders turn status when the game is being played', () => {
    const testStore = createStore(() => ({
      ...testState,
      status: GameStatus.PLAYING,
    }))

    const { getByTestId } = render(
      <Provider store={testStore}>
        <Status />
      </Provider>
    )
    
    expect(getByTestId('Status/TurnStatus')).not.toBeNull()
  })

  it('renders a result when the game has finished', () => {
    const testStore = createStore(() => ({
      ...testState,
      status: GameStatus.FINISHED,
    }))

    const { getByTestId } = render(
      <Provider store={testStore}>
        <Status />
      </Provider>
    )
    
    expect(getByTestId('Status/GameResult')).not.toBeNull()
  })

  it('reset game button dispatches reset action', () => {
    const resetGameMock = resetGame as jest.Mock
    resetGameMock.mockReturnValue({ type: 'PRETEND' })

    const { getByRole } = render(
      <Provider store={createStore(() => testState)}>
        <Status />
      </Provider>
    )
    fireEvent.click(getByRole('button'))
    
    expect(resetGameMock).toHaveBeenCalled()
  })
})
