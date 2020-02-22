import React from 'react'
import { render } from '@testing-library/react'

import X from './X'

describe('X', () => {
  it('renders', () => {
    const { asFragment } = render(<X />)
    expect(asFragment()).toMatchSnapshot()
  })
})
