import { take, takeEvery, put, call, all } from 'redux-saga/effects'

import {
  SEARCH_MOVIES_REQUEST,
} from './modules/home/actions'
import {
  searchMoviesReceive,
  searchMoviesSuccess,
  searchMoviesFail,
} from './modules/home/actionCreators'

import {
  initialSearch,
  getMoreMoviesEventChannel,
} from './services/search'

export function* searchSaga({ payload }) {
  const firstResult = yield call(initialSearch, payload)
  if (firstResult.id) {
    yield put(searchMoviesReceive(firstResult))
  } else {
    return yield put(searchMoviesFail())
  }

  const moreMoviesChannel = yield call(getMoreMoviesEventChannel, firstResult.listening_token)
  try {
    while (true) {
      const oneMoreMovie = yield take(moreMoviesChannel)
      yield put(searchMoviesReceive(oneMoreMovie))
    }
  } finally {
    yield put(searchMoviesSuccess())
  }
}

export function* searchWatcher() {
  yield takeEvery(SEARCH_MOVIES_REQUEST, searchSaga)
}

export default function* mainSagas() {
  yield all([
    searchWatcher(),
  ])
}
