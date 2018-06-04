import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import saga from './sagas'

import { moviesReducer as movies } from './modules/home/reducers/movies'
import { reducer as display } from './components/viewMode/reducers/viewMode'
import { history } from './helpers/history'

const routingMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const enhancers = []
const middleware = [
  routingMiddleware,
  sagaMiddleware,
  thunk,
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension // eslint-disable-line prefer-destructuring

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
)

const store = createStore(
  combineReducers({
    display,
    movies,
    routing: routerReducer,
  }),
  composedEnhancers,
)

// start sagaMiddleware
sagaMiddleware.run(saga)

export default store
