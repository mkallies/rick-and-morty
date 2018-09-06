import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import * as actions from '../actions'
import * as types from '../constants'
import { IS_LOADING } from '../../../common/constants'
import {
  charactersResponse,
  episodeResponse,
  locationResponse,
} from './mock-data'

describe('characters actions test', () => {
  const mockStore = configureMockStore([thunk])
  const store = mockStore()
  const mockAdapter = new MockAdapter(axios)

  beforeEach(() => {
    store.clearActions()
  })

  test('fetchCharacters should dispatch correct type and payload ', async () => {
    mockAdapter
      .onGet('https://rickandmortyapi.com/api/character')
      .reply(200, charactersResponse)

    const expectedActions = [
      {
        payload: { isLoading: true, key: types.FETCH_CHARACTERS },
        type: IS_LOADING,
      },
      {
        type: types.FETCH_CHARACTERS,
        payload: charactersResponse.results,
        meta: 'characters',
      },
      {
        payload: { isLoading: false, key: types.FETCH_CHARACTERS },
        type: IS_LOADING,
      },
    ]

    await store.dispatch(actions.fetchCharacters([1, 2, 3]))

    expect(store.getActions()).toEqual(expectedActions)
  })

  test('fetchEpisodes should dispatch correct type and payload ', async () => {
    mockAdapter
      .onGet('https://rickandmortyapi.com/api/episode/12')
      .reply(200, episodeResponse)

    const expectedActions = [
      {
        payload: { isLoading: true, key: types.FETCH_EPISODES },
        type: IS_LOADING,
      },
      {
        type: types.FETCH_EPISODES,
        payload: [episodeResponse],
        meta: 'episodes',
      },
      {
        payload: { isLoading: false, key: types.FETCH_EPISODES },
        type: IS_LOADING,
      },
    ]

    await store.dispatch(actions.fetchEpisodes([12]))

    expect(store.getActions()).toEqual(expectedActions)
  })

  test('fetchLocation should dispatch correct type and payload ', async () => {
    mockAdapter
      .onGet('https://rickandmortyapi.com/api/location/1,20')
      .reply(200, locationResponse)

    const expectedActions = [
      {
        payload: { isLoading: true, key: types.FETCH_LOCATION },
        type: IS_LOADING,
      },
      {
        type: types.FETCH_LOCATION,
        payload: locationResponse,
        meta: 'locations',
      },
      {
        payload: { isLoading: false, key: types.FETCH_LOCATION },
        type: IS_LOADING,
      },
    ]

    await store.dispatch(actions.fetchLocation(1, 20))

    expect(store.getActions()).toEqual(expectedActions)
  })
})
