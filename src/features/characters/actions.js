import * as types from './constants'
import { fetcher } from '../../network'
import { setIsLoading } from '../../common/actions'
import { toast } from 'react-toastify'

export const fetchCharacters = () => async dispatch => {
  dispatch(setIsLoading(types.FETCH_CHARACTERS, true))

  const config = {
    method: 'get',
    url: '/character',
  }

  try {
    const { data } = await fetcher({ config })

    dispatch({
      type: types.FETCH_CHARACTERS,
      payload: data.results,
      meta: 'characters',
    })
  } catch (error) {
    console.log('fetchCharacters ERROR', error)
    toast.error('Error fetching characters')
  }

  dispatch(setIsLoading(types.FETCH_CHARACTERS, false))
}

export const fetchEpisodes = episodeIds => async dispatch => {
  dispatch(setIsLoading(types.FETCH_EPISODES, true))

  const config = {
    method: 'get',
    url: `/episode/${episodeIds}`,
  }

  try {
    const { data } = await fetcher({ config })

    dispatch({
      type: types.FETCH_EPISODES,
      payload: Array.isArray(data) ? data : [data],
      meta: 'episodes',
    })
  } catch (error) {
    console.log('fetchEpisodes ERROR', error)
    toast.error('Error fetching episodes')
  }

  dispatch(setIsLoading(types.FETCH_EPISODES, false))
}

export const fetchLocation = (origin, current) => async dispatch => {
  dispatch(setIsLoading(types.FETCH_LOCATION, true))

  const config = {
    method: 'get',
    url: `/location/${origin},${current}`,
  }

  try {
    const { data } = await fetcher({ config })

    dispatch({
      type: types.FETCH_LOCATION,
      payload: data,
      meta: 'locations',
    })
  } catch (error) {
    console.log('fetchLocation ERROR', error)
    toast.error('Error fetching location')
  }

  dispatch(setIsLoading(types.FETCH_LOCATION, false))
}
