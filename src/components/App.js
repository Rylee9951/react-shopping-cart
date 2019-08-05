import React from 'react'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.css'
import 'semantic-ui-css/semantic.min.css'
import '../styles/App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

import Home from './Home'

export default props => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
        </div>
      </Router>
    </Provider>
  )
}