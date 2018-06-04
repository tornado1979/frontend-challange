import {
  SEARCH_MOVIES_RECEIVE,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_FAIL,
  SEARCH_MOVIES_SUCCESS,
} from '../actions'

const initialState = {
  data: [],
  errorMessage: null,
  isLoading: false,
}

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        data: [],
        isLoading: true,
      }
    case SEARCH_MOVIES_RECEIVE:
      return {
        ...state,
        data: [
          ...state.data,
          payload,
        ],
      }
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case SEARCH_MOVIES_FAIL:
      return {
        ...state,
        data: [],
        isLoading: false,
      }
    default:
      return state
  }
}
