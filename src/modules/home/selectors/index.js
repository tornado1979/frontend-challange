import { createSelector } from 'reselect'

const getLocalState = state => state
const getRoute = state => state.routing

export const isLoading = createSelector(
  getLocalState,
  state => state.movies.isLoading,
)

export const getData = createSelector(
  getLocalState,
  state => state.movies.data || [],
)

export const getMovieIdFromRoute = createSelector(
  getRoute,
  routing => routing.location.pathname.split('/movies-socket/')[1],
)

export const getMovie = createSelector(
  [getData, getMovieIdFromRoute],
  (data, movieIdFromRoute) => data.filter(movie => movie.id === Number(movieIdFromRoute))[0],
)
