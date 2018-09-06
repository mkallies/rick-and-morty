import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FourOhFour from './404'
import CharacterContainer from '../../characters/containers/CharacterContainer'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <div className="app">
    <Switch>
      <Route component={CharacterContainer} exact path="/" />
      <Route component={FourOhFour} />
    </Switch>
    <ToastContainer />
  </div>
)

export default App
