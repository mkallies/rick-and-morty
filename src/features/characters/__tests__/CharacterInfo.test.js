import React from 'react'
import CharacterInfo from '../components/CharacterInfo'
import { episodeResponse, locationResponse } from './mock-data'

describe('<CharacterInfo />', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      episodes: [episodeResponse, episodeResponse],
      locations: locationResponse,
      isEpisodesLoading: false,
      isLocationLoading: false,
    }

    wrapper = shallow(<CharacterInfo {...props} />)
  })

  test('should render correctly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('Loader for locations should show when `isLocationLoading` is true ', () => {
    expect(wrapper.find('Loader').exists()).toBeFalsy()

    const newProps = {
      ...props,
      isLocationLoading: true,
    }
    wrapper = shallow(<CharacterInfo {...newProps} />)

    expect(wrapper.find('Loader').prop('content')).toBe('Loading locations')
  })

  test('Loader for episodes should show when `isEpisodesLoading` is true ', () => {
    expect(wrapper.find('Loader').exists()).toBeFalsy()

    const newProps = {
      ...props,
      isEpisodesLoading: true,
    }
    wrapper = shallow(<CharacterInfo {...newProps} />)

    expect(wrapper.find('Loader').prop('content')).toBe('Loading episodes')
  })

  test('should show 2 locations when locations array has 2 elements', () => {
    expect(
      wrapper
        .find('LocationDisplay')
        .dive()
        .find('Segment')
    ).toHaveLength(2)
  })

  test('should show 1 location when locations array has 1 element', () => {
    const newProps = {
      ...props,
      locations: [locationResponse[0]],
    }
    wrapper = shallow(<CharacterInfo {...newProps} />)

    expect(
      wrapper
        .find('LocationDisplay')
        .dive()
        .find('Segment')
    ).toHaveLength(1)
  })
})
