import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import promise from 'redux-promise'
import reduxThunk from 'redux-thunk'

import './index.css'
import reducers from './reducers/index'
import App from './components/App'
import Welcome from './components/Welcome'
import PrivateRoute from './components/PrivateRoute'
import registerServiceWorker from './registerServiceWorker'

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/auth" component={Welcome} />
        <PrivateRoute path="/" component={App} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker();
