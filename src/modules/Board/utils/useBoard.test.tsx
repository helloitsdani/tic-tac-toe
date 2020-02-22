import React from 'react'
import { Provider } from 'react-redux'
import { renderHook } from '@testing-library/react-hooks'
import { createStore } from 'redux'

import useBoard, { allowMove } from './useBoard'
import { GameStatus, BoardPosition, GameStateType, PlayerId } from '../../../types'

import { placePiece } from '../../../store/actions'

jest.mock('../../../store/actions')

describe('allowMove', () => {
  it('returns false when the game has ended', () => {
    const moves = { PLAYER_ONE: [], PLAYER_TWO: [] }
    expect(allowMove(GameStatus.FINISHED, moves, BoardPosition.BOTTOM_CENTRE)).toBe(false)
  })

  it('returns false if the chosen space is occupied', () => {
    const moves = { PLAYER_ONE: [BoardPosition.BOTTOM_CENTRE], PLAYER_TWO: [] }
    expect(allowMove(GameStatus.FINISHED, moves, BoardPosition.BOTTOM_CENTRE)).toBe(false)
  })

  it('returns true if the move is valid', () => {
    const moves = { PLAYER_ONE: [], PLAYER_TWO: [] }
    expect(allowMove(GameStatus.PLAYING, moves, BoardPosition.BOTTOM_CENTRE)).toBe(true)
  })
})

describe('useBoard', () => {
  const testState: GameStateType = {
    moves: {
      [PlayerId.PLAYER_ONE]: [BoardPosition.MIDDLE_CENTRE, BoardPosition.BOTTOM_RIGHT],
      [PlayerId.PLAYER_TWO]: [BoardPosition.BOTTOM_CENTRE],
    },
    players: {
      all: [
        {
          piece: PlayerId.PLAYER_ONE,
          name: 'Test Player One',
        },
        {
          piece: PlayerId.PLAYER_TWO,
          name: 'Test Player Two',
        },
      ],
      active: PlayerId.PLAYER_TWO,
    },
    winner: null,
    status: GameStatus.PLAYING,
  }

  const testWrapper = ({ children }: any) => <Provider store={createStore(() => testState)}>{children}</Provider>

  it('returns a set of board positions from state', () => {
    const { result } = renderHook(() => useBoard(), {
      wrapper: testWrapper,
    })
    const [boardPositions] = result.current

    const expectedBoardPositions = {
      [BoardPosition.MIDDLE_CENTRE]: PlayerId.PLAYER_ONE,
      [BoardPosition.BOTTOM_RIGHT]: PlayerId.PLAYER_ONE,
      [BoardPosition.BOTTOM_CENTRE]: PlayerId.PLAYER_TWO,
    }

    expect(boardPositions).toMatchObject(expectedBoardPositions)
  })

  it('returns a callback which dispatches the place piece action', () => {
    const placePieceMock = placePiece as jest.Mock
    placePieceMock.mockReturnValue({ type: 'PRETEND' })

    const { result } = renderHook(() => useBoard(), {
      wrapper: testWrapper,
    })
    const [_, onPositionSelect] = result.current

    const expectedPosition = BoardPosition.TOP_LEFT

    onPositionSelect(expectedPosition)
    expect(placePiece).toHaveBeenCalledWith(testState.players.active, expectedPosition)
  })
})
