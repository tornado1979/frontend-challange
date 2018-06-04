import {
  VIEW_MODE_CHANGE,
} from '../actions'


export const changeViewMode = (payload) => {
  return {
    payload,
    type: VIEW_MODE_CHANGE,
  }
}
