import React from 'react';
import logo from './logo.svg';
import './App.css';

// import store from './component/Store'

import {removeColor} from './component/ActionFunc'

import storeFactory from './component/storeFactory/storeFactory'

const store = storeFactory(true)

// store.subscribe(() =>
//   console.log('color', store.getState())
// )
// const unsub = store.subscribe(() =>
//   console.log('color test', store.getState())
// )
store.dispatch({
  type: "ADD_COLOR",
  id: 555,
  title: 'pppasdfasdfasdfd',
  color: '#FFFFCC',
  timestamp: '5556'
})

store.dispatch(removeColor(555))
store.dispatch({
  type: "ADD_COLOR",
  id: 555,
  title: 'ppp',
  color: '#FFFFCC',
  timestamp: '5556'
})



// console.warn("store", store.getState())

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
