import React from 'react'
import { render } from '@testing-library/react'

import Background from './Background'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

describe('Background', () => {
  it('renders', () => {
    const testStore = createStore(() => ({}))

    const { asFragment } = render(
      <Provider store={testStore}>
        <Background />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
