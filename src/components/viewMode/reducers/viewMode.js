import {
  VIEW_MODE_CHANGE,
} from '../actions'

const initialState = {
  viewMode: 'VIEW_MODE_SMALL',
}

export const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case VIEW_MODE_CHANGE:
      return {
        ...state,
        viewMode: payload,
      }
    default:
      return state
  }
}
