import React from 'react'
import Characters from '../components/Characters'
import { charactersResponse } from './mock-data'

describe('<Characters />', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      characters: [],
      handleCharacterLike: jest.fn(),
      handleCharacterModal: jest.fn(),
    }

    wrapper = shallow(<Characters {...props} />)
  })

  test('should render correctly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should have 0 cards when characters array is empty', () => {
    expect(wrapper.find('Card')).toHaveLength(0)
  })

  test('should have 3 cards when characters array has 3 elements', () => {
    const newProps = {
      ...props,
      characters: charactersResponse.results,
    }
    wrapper = shallow(<Characters {...newProps} />)

    expect(wrapper.find('Card')).toHaveLength(3)
  })

  test('should emit an action when `Like` button is clicked', () => {
    const newProps = {
      ...props,
      characters: charactersResponse.results,
    }
    wrapper = shallow(<Characters {...newProps} />)

    wrapper
      .find('Card')
      .first()
      .find('Button')
      .last()
      .simulate('click')

    const { handleCharacterLike } = props

    expect(handleCharacterLike).toHaveBeenCalledTimes(1)
  })

  test('should emit an action when `More Info` button is clicked', () => {
    const newProps = {
      ...props,
      characters: charactersResponse.results,
    }
    wrapper = shallow(<Characters {...newProps} />)

    wrapper
      .find('Card')
      .first()
      .find('Button')
      .first()
      .simulate('click')

    const { handleCharacterModal } = props

    expect(handleCharacterModal).toHaveBeenCalledTimes(1)
  })
})
