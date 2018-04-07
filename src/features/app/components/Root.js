import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FourOhFour from './404'

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={FourOhFour} />

      {/* <PrivateRoute exact path="/" component={1} />
      <PrivateRoute exact path="/2" component={2} />
      */}
      <Route component={FourOhFour} />
    </Switch>
  </div>
)

export default App
