import React from 'react'
import Episodes from '../components/Episodes'
import { episodeResponse } from './mock-data'

describe('<Episodes />', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      episodes: [episodeResponse],
    }

    wrapper = shallow(<Episodes {...props} />)
  })

  test('should render correctly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should have correct header', () => {
    expect(
      wrapper
        .find('Header')
        .dive()
        .text()
    ).toBe('Episode List')
  })

  test('should display correct amount of accordion panels', () => {
    expect(wrapper.find('Accordion').prop('panels')).toHaveLength(1)

    wrapper = shallow(
      <Episodes
        episodes={[episodeResponse, episodeResponse, episodeResponse]}
      />
    )

    expect(wrapper.find('Accordion').prop('panels')).toHaveLength(3)
  })
})
