import { combineReducers } from 'redux'

import { moviesReducer as movies } from './modules/home/reducers/movies'
import { reducer as viewMode } from './components/viewMode/reducers/viewMode'

export const rootReducers = combineReducers({
  movies,
  moviesDisplay: viewMode,
})
