import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import './footer.scss'
import { MainBlock } from '../mainBlock'
import { Block } from '../block'

import {
  copywrite,
  footerData,
  socialData,
} from '../../data/footerData'

export const Footer = ({ bgTemplate }) => {
  const footerClass = classnames({
    [`bg--${bgTemplate}`]: true,
  })

  // read footerData and upt them on an array
  const lista = Object.keys(footerData)
    .map((key) => {
      return footerData[key].items.map((listItem) => {
        if (footerData[key].type !== 'image') {
          return <a href="/" key={listItem.id}>{listItem.value}</a>
        }
        return {
          id: listItem.id,
          img: listItem.value,
          type: 'image',
        }
      })
    })

  // create lists & images blocks
  const innerBlocks = lista.map((items) => {
    if (items[0].type && items[0].type === 'image') {
      return (<Block
        hasImage
        key={items[0].id}
        source={items[0].img}
      />)
    }

    return (<Block
      hasMessage
      isMenu
      key={items[0].key}
      text={items}
    />)
  })

  // read social data
  const socialList = Object.keys(socialData)
    .map((key) => {
      return ({
        id: socialData[key].id,
        img: socialData[key].items[0],
        type: 'image',
      })
    })
  // create social  blocks
  const socialBlocks = socialList.map((item) => {
    if (item.type && item.type === 'image') {
      return (<Block
        hasImage
        key={item.id}
        source={item.img}
      />)
    }
    return false
  })

  const copywriteBlock = (<Block
    hasMessage
    isCopywrite
    key="123"
    text={copywrite}
    title="" // gets special className
  />)

  return (
    <footer className={footerClass}>
      <MainBlock
        bgTemplate="template2"
        hasMessage
        hasTitle
        text="Neque porro quisquam est qui dolorem ipsum quia
          dolor sit amet, consectetur, adipisci velit..."
        title="Main Title"
      >
        {/* blocks 4 footer blocks 1st line */}
        {innerBlocks}
        {/* social blocks & copywrite 2nd line */}
        {socialBlocks}
        {copywriteBlock}
      </MainBlock>
    </footer>
  )
}

Footer.propTypes = {
  bgTemplate: propTypes.string.isRequired,
}
