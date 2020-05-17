import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer as reducer } from './reducers';

import App from './App';

function saveToLocalStorage(state) {
  try {
    const lsState = JSON.stringify(state)
    localStorage.setItem('state', lsState)
  }
  catch (e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const lsState = localStorage.getItem('state')
    if (lsState === null) {
      return undefined
    }
    return JSON.parse(lsState)
  }
  catch (e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
