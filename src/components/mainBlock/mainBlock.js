import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import '../block/block.scss'

export const MainBlock = ({
  bgTemplate,
  children,
  hasMessage,
  hasTitle,
  isMonoblock,
  isReverse,
  text,
  title,
}) => {
  const blockClass = classnames({
    'direction-reverse': isReverse,
    monoblock: isMonoblock,
    [`bg--${bgTemplate}`]: bgTemplate,
  })

  return (
    <div className={`main-block ${blockClass}`} >
      {hasTitle && <div className="col-title">{title}</div>}
      {hasMessage &&
      <div className="col-text">
        {text}
      </div>}
      {/* 4 blocks : lists & popcorn img */}
      {/* and social blocks */}
      {children &&
        <Fragment>
          <div className="horizontalBlock with-subblocks">
            {children[0]}
          </div>
          <div className="horizontalBlock with-subblocks social">
            <div className="social-wrapper">
              {children[1]}
              {children[2]}
            </div>
          </div>
        </Fragment>}
      {/* A. 6 small blocks on two lines space-around */}
    </div>
  )
}

MainBlock.defaultProps = {
  hasMessage: false,
  hasTitle: false,
  isMonoblock: false,
  isReverse: false,
}

MainBlock.propTypes = {
  bgTemplate: propTypes.string.isRequired,
  children: propTypes.array.isRequired, // eslint-disable-line
  hasMessage: propTypes.bool,
  hasTitle: propTypes.bool,
  isMonoblock: propTypes.bool,
  isReverse: propTypes.bool,
  text: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
}
