import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { routes, routeIfy } from './routes'
import './index.css'
import store from '../src/redux/store';
import {Provider} from 'react-redux';

ReactDOM.render((
  <Router >
      <Provider store={store}>
      <div >
      { routeIfy(routes) }
    </div>
      </Provider>
  </Router>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
