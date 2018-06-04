

export const changeRoute = (action, path) => {
  return (dispatch) => {
    dispatch(action)
    browserHistory.push(path)
  }
}
