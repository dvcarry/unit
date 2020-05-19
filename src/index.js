import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import dataReducer from './Redux/dataReducer';
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

let reducers = combineReducers({
  dataPage: dataReducer,
})

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
