import React, { Fragment } from 'react'
import { Provider } from 'react-redux'

import { ConnectedRouter } from 'react-router-redux'

import { history as browserHistory } from './helpers/history'

import store from './store'

import './App.scss'

import { Routes } from './components/routes'
import { Footer } from './components/footer'
import { Header } from './components/header'

const App = () =>
  (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
          <Fragment>
            <Header />
            <Routes />
            <Footer bgTemplate="template1" />
          </Fragment>
        </ConnectedRouter>
      </Provider>
    </div>)

export default App
