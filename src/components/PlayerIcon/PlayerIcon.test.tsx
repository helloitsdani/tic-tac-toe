import React from 'react'
import { render } from '@testing-library/react'

import PlayerIcon from './PlayerIcon'
import { PlayerId } from '../../types'

describe('PlayerIcon', () => {
  it('renders', () => {
    const { asFragment } = render(<PlayerIcon />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders an icon for player one', () => {
    const { getByTitle } = render(<PlayerIcon player={PlayerId.PLAYER_ONE} />)
    expect(getByTitle('X')).not.toBeNull()
  })

  it('renders an icon for player two', () => {
    const { getByTitle } = render(<PlayerIcon player={PlayerId.PLAYER_TWO} />)
    expect(getByTitle('O')).not.toBeNull()
  })
})
