import React, { Component } from 'react'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'

import HereAndThereApp from './HereAndThereApp'
import initialState from '../constants/initialState'
import { selectCity } from '../actions/city'
import reducer from '../reducers'

const store = createStore(reducer, initialState, compose(
  applyMiddleware(thunk, createLogger()),
  (window.devToolsExtension ? window.devToolsExtension() : f => f)
))

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <HereAndThereApp />
        </Provider>
      </div>
    )
  }
}

setTimeout(() => store.dispatch(selectCity('New York')), 5000)
