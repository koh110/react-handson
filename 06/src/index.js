import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import client from 'axios'

import reducer from './reducer'

const thunkWithClient = thunk.withExtraArgument(client)
const store = createStore(combineReducers({ ...reducer }), applyMiddleware(thunkWithClient))

import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
)
