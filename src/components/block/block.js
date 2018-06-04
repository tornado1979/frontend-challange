import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import './block.scss'
// import imgLoremIpsum from '../../assets/img/Lorem-Ipsum.jpg'

export const Block = ({
  bgTemplate,
  hasImage = false,
  hasMessage,
  hasTitle,
  isCopywrite,
  isMenu = false,
  isMonoblock,
  isReverse,
  source,
  text,
  title,
}) => {
  const blockClass = classnames({
    'block-wrapper': true,
    copywrite: isCopywrite,
    'direction-reverse': isReverse,
    [`bg--${bgTemplate}`]: bgTemplate,
    menu: isMenu,
    monoblock: isMonoblock,
  })
  const colTextClass = classnames({
    'col-text': true,
  })
  return (
    <div className={blockClass} >
      {hasTitle && <div className="col-title">{title}</div>}
      {hasImage &&
      <div className="col-img">
        <img alt="" src={source} />
      </div>}
      {hasMessage &&
      <div className={colTextClass}>
        {text}
      </div>}
    </div>
  )
}

Block.defaultProps = {
  bgTemplate: 'template1',
  hasImage: false,
  hasMessage: false,
  hasTitle: false,
  isCopywrite: false,
  isMenu: false,
  isMonoblock: false,
  isReverse: false,
  title: 'title',
}

Block.propTypes = {
  bgTemplate: propTypes.string,
  hasImage: propTypes.bool,
  hasMessage: propTypes.bool,
  hasTitle: propTypes.bool,
  isCopywrite: propTypes.bool,
  isMenu: propTypes.bool,
  isMonoblock: propTypes.bool,
  isReverse: propTypes.bool,
  source: propTypes.string, // eslint-disable-line
  text: propTypes.oneOfType([ // eslint-disable-line
    propTypes.string,
    propTypes.array,
  ]),
  title: propTypes.string,
}
