import React from 'react'
import ReactDOM from 'react-dom'
import { RootContainer } from './features/app'

ReactDOM.render(<RootContainer />, document.getElementById('root'))

// const store = initializeStore()

// const render = Component => {
//   ReactDOM.render(
//     <Router>
//       <Provider store={store}>
//         <Component />
//       </Provider>
//     </Router>,
//     document.getElementById('root')
//   )
// }

// render(RootContainer)

// if (module && module.hot) {
//   module.hot.accept('./features/app', () => {
//     render(RootContainer)
//   })
// }
