import * as types from '../actions'

export const searchMoviesRequest = (searchString) => {
  console.log('action SEARCH_MOVIES_REQUEST') //eslint-disable-line
  return {
    payload: searchString,
    type: types.SEARCH_MOVIES_REQUEST,
  }
}

export const searchMoviesReceive = (payload) => {
  console.log('action SEARCH_MOVIES_RECEIVE') //eslint-disable-line
  return {
    payload,
    type: types.SEARCH_MOVIES_RECEIVE,
  }
}

export const searchMoviesSuccess = (payload) => {
  return {
    payload,
    type: types.SEARCH_MOVIES_SUCCESS,
  }
}

export const searchMoviesFail = (payload) => {
  return {
    payload,
    type: types.SEARCH_MOVIES_FAIL,
  }
}
