import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import reducer from './rootReducer'

export const configureStore = (persistedState = {}) => {
  return createStore(
    reducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}
