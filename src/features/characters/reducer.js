import * as types from './constants'

const initialState = {
  characters: [],
  episodes: [],
  locations: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CHARACTERS:
    case types.FETCH_EPISODES:
    case types.FETCH_LOCATION:
      return {
        ...state,
        [action.meta]: action.payload,
      }

    default:
      return state
  }
}
