import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import LS from '../../../utils/localStorage'
// import debounce from "lodash/debounce";

import { configureStore } from '../store'
import Root from '../components/Root'
// import { getAuthDetails } from "../../auth/selectors";

const authState = LS.getItem('AUTH_STATE')
const persistedState = authState ? { auth: authState } : {}

const store = configureStore(persistedState)

// const saveAuthState = state => {
//   console.log('SAVING')
//   const authState = getAuthDetails(state)
//   LS.setItem('AUTH_STATE', authState)
// }

// store.subscribe(() => {
//   console.log('STORE', ...arguments)
//   saveAuthState(store.getState())
//   debounce(() => saveAuthState(store.getState()), 1000)
// })

const RootContainer = () => (
  <Router>
    <Provider store={store}>
      <Root />
    </Provider>
  </Router>
)

export default RootContainer
