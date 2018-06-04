import { createSelector } from 'reselect'

const getLocalState = state => state.display

export const getViewMode = createSelector(
  getLocalState,
  state => state.viewMode,
)
