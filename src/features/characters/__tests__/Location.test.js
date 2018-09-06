import React from 'react'
import Location from '../components/Location'

describe('<Location />', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      name: 'Morty',
      dimension: 'none',
      type: 'hooman',
      residentCount: 100,
    }

    wrapper = shallow(<Location {...props} />)
  })

  test('should contain 4 items', () => {
    expect(wrapper.children()).toHaveLength(4)
  })
})
