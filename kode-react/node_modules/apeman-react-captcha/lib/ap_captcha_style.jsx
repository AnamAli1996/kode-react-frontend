/**
 * Style for ApCaptcha.
 * @class ApCaptchaStyle
 */

'use strict'

import React, { Component, PropTypes as types } from 'react'
import { ApStyle } from 'apeman-react-style'

/** @lends ApCaptchaStyle */
class ApCaptchaStyle extends Component {
  render () {
    const s = this
    let { props } = s

    let { all, small, medium, large } = ApCaptchaStyle.styleData(props)

    return (
      <ApStyle data={ Object.assign(all, props.style) }
               smallMediaData={ small }
               mediumMediaData={ medium }
               largeMediaData={ large }
      >{ props.children }</ApStyle>
    )
  }
}

Object.assign(ApCaptchaStyle, {
  propTypes: {
    style: types.object
  },
  defaultProps: {
    style: {}
  },
  styleData (config) {
    return {
      all: {
        '.ap-captcha': {
          display: 'block',
          position: 'relative',
          background: '#FAFAFA',
          padding: '8px',
          boxSizing: 'border-box',
          textAlign: 'center'
        },
        '.ap-captcha-image': {
          background: 'white',
          border: '1px solid #E0E0E0'
        },
        '.ap-captcha-image .ap-image-spinner': {
          background: 'transparent'
        },
        '.ap-captcha-refresh-button': {
          display: 'block',
          textAlign: 'right',
          cursor: 'pointer',
          padding: '4px 8px',
          position: 'absolute',
          fontSize: '12px',
          right: 0,
          bottom: 0,
          background: 'rgba(255,255,255,0.9)'
        },
        '.ap-captcha-refresh-button:active': {
          opacity: 0.8
        },
        '.ap-captcha-spinner': {
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 4,
          background: 'rgba(255,255,255,0.9)',
          color: '#CCC'
        }
      }
    }
  }
})

export default ApCaptchaStyle
