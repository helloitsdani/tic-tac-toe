import React from 'react'
import { render } from '@testing-library/react'

import BoardGrid from './BoardGrid'

describe('BoardGrid', () => {
  it('renders', () => {
    const { asFragment } = render(<BoardGrid />)
    expect(asFragment()).toMatchSnapshot()
  })
})
