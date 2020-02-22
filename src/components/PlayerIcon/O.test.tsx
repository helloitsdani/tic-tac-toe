import React from 'react'
import { render } from '@testing-library/react'

import O from './O'

describe('O', () => {
  it('renders', () => {
    const { asFragment } = render(<O />)
    expect(asFragment()).toMatchSnapshot()
  })
})
