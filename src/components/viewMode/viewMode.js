import React from 'react'
import propTypes from 'prop-types'

import {
  VIEW_MODE_LARGE,
  VIEW_MODE_MEDIUM,
  VIEW_MODE_SMALL,
} from '../../constants'
import './viewMode.scss'

export const ViewMode = ({ change }) => {
  return (
    <div className="view">
      <form>
        <select className="viewBox" onChange={e => change(e)}>
          <option value={VIEW_MODE_SMALL}>2 movies ii per line</option>
          <option value={VIEW_MODE_LARGE}>1 movie per line</option>
          <option value={VIEW_MODE_MEDIUM}>2 movies i per line</option>
        </select>
      </form>
    </div>
  )
}

ViewMode.propTypes = {
  change: propTypes.func.isRequired,
}
