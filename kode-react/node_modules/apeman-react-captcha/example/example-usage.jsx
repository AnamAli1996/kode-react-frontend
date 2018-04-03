'use strict'

import React from 'react'
import {ApCaptcha, ApCaptchaStyle} from 'apeman-react-captcha'

const ExampleComponent = React.createClass({
  getInitialState () {
    return {
      captchaSrc: './captcha.svg'
    }
  },
  render () {
    const s = this
    let { state } = s
    return (
      <div>
        <ApCaptchaStyle />
        <ApCaptcha src={ state.captchaSrc }
                   refreshText="refresh"
                   onRefresh={ s.refreshCaptcha }/>
      </div>
    )
  },
  refreshCaptcha () {
    const s = this
    let time = new Date().getTime()
    console.log('refreshCaptcha:', time)
    s.setState({
      captchaSrc: `./images/mock-captcha.svg?t=${time}`
    })
  }
})
