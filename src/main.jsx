import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { store } from './redux';
import { Provider } from 'react-redux';
import "./sass/style.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
