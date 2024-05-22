import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from './constans/mock'
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App restaurants={restaurants} />)
