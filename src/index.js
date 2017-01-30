import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

import './styles/screen.scss'

export App from './App'
export Layout from './Layout'
export Explore from './Explore'
export Login from './Login'
export NewItenerary from './NewItenerary'
export Profile from './Profile'

const root = document.getElementById('root')

const render = (app) => {
  ReactDOM.render(
    <AppContainer>{app}</AppContainer>,
    root
  )
}

render(<App />)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(<NextApp />)
  })
}
