import { eventChannel, END } from 'redux-saga'

import {
  getMoviesByQuery,
} from '../data/moviesREST'

import {
  subscribeConnectionForToken,
  unsubscribeConnectionForToken,
} from '../data/moviesSocket'

export const initialSearch = query => getMoviesByQuery(query)

export const CHANNEL_STATUS_ACTIVE = 'active'
export const CHANNEL_STATUS_TERMINATED = 'terminated'

export const getMoreMoviesEventChannel = (token) => {
  return eventChannel((emit) => {
    function handler(unparsedData) {
      const data = JSON.parse(unparsedData)
      switch (data.status) {
        case CHANNEL_STATUS_ACTIVE:
          return emit(data)
        case CHANNEL_STATUS_TERMINATED:
          return emit(END)
        default:
          return false
      }
    }

    subscribeConnectionForToken(token, handler)

    return () => {
      unsubscribeConnectionForToken(token, handler)
    }
  })
}
