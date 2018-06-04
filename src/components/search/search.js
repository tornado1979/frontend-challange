import React from 'react'
import propTypes from 'prop-types'

import './search.scss'

export const Search = ({ change, click }) => {
  return (
    <div className="search">
      <input onKeyUp={event => change(event)} placeholder="search a movie" type="text" />
      <button onClick={event => click(event)}>go!</button>
    </div>
  )
}

Search.propTypes = {
  change: propTypes.func.isRequired,
  click: propTypes.func.isRequired,
}
