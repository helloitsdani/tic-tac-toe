import playersReducer, { defaultState } from './players'

describe('players reducer', () => {
  it('returns the default state when called', () => {
    expect(
      playersReducer()
    ).toEqual(defaultState)
  })
})