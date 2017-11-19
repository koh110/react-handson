import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import client from 'axios'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer } from 'react-router-redux'

import reducer from './reducer'

const thunkWithClient = thunk.withExtraArgument(client)
const history = createHistory()
const store = createStore(combineReducers({
  ...reducer,
  router: routerReducer
}), applyMiddleware(thunkWithClient), applyMiddleware(routerMiddleware(history)))

import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App history={history}></App>
  </Provider>,
  document.getElementById('root')
)
