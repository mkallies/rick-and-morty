import reducer from '../reducer'

describe('characters reducer', () => {
  test('should return the initial state', () => {
    const next = reducer(undefined, {})
    expect(next).toMatchSnapshot()
  })
})
