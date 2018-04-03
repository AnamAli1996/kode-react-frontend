/**
 * SVG captcha.
 * DO NOT use svg base captcha in production, since it may be parsable by bots.
 * You need to convert to bitmap like png beforehand.
 * @class ApCaptchaSvg
 */

'use strict'

import React, { Component, PropTypes as types } from 'react'
import randomval, { randomInt } from 'randomval'

let dummyLetter = (letters = '1234567890abcdefg') => letters[ randomInt(0, letters.length - 1) ]

/** @lends ApCaptchaSvg */
class ApCaptchaSvg extends Component {
  render () {
    const s = this
    let { props } = s

    let color = '#555'

    let { width, height } = props

    let backgrounds = [ 0, 1, 2, 3 ].map((val, i, { length }) => {
      let margin = width * 0.2
      let rate = (i + 0.5) / length
      return (
        <ApCaptchaSvg.StripeBlock rate={ rate }
                                  key={ `${i}-${val}` }
                                  color={ color }
                                  blockProps={ {
                                    key: `bg-${i}`,
                                    width: parseInt(width / length + (margin * 2)),
                                    height: parseInt(height + (margin * 2)),
                                    x: parseInt(width * rate - margin),
                                    y: parseInt(0 - margin)
                                  } }
        />
      )
    })

    let texts = props.text.split('').map((letter, i, letters) => {
      let indices = [ 0, 1, 2, 3, 4, 5 ]
      let real = randomInt(0, indices.length - 1)
      let texts = indices.map((j) => {
        let rate = i / letters.length
        let key = `letter-${i}-${j}`
        let isReal = j === real
        return (
          <ApCaptchaSvg.Letter letter={ isReal ? letter : dummyLetter() }
                               rate={ rate }
                               width={ width }
                               height={ height }
                               textProps={ {
                                 key,
                                 fill: isReal ? color : `rgba(255,255,255,${0.01 * randomInt(0, 30)})`
                               } }
                               key={ `${i}-${j}-${letter}` }
          />
        )
      })
      return (
        <g key={`letter-group-${i}`}>{ texts }</g>
      )
    })
    return (
      <svg version={ props.version }
           width={ width }
           height={ height }
           xmlns={ props.xmlns }
           viewBox={`0 0 ${width} ${height}`}
      >
        <g>{backgrounds}</g>
        <g>{texts}</g>
      </svg>
    )
  }

  static Letter ({ letter, rate, width, height, textProps }) {
    let padding = 16

    let w = width - (padding * 2)
    let h = height

    let moveRange = h / 20
    let move = randomInt.bind(randomval, moveRange * -1, moveRange)

    let fontSize = h * 0.8
    let x = padding + w * rate + (fontSize / 4)
    let y = fontSize
    let rotateRange = 40
    let rotate = randomInt(-rotateRange, rotateRange)
    return (
      <text x={ parseInt(x) }
            y={ parseInt(y) }
            fontSize={ parseInt(fontSize) }
            transform={ `translate(${move()}, ${move()}) rotate(${parseInt(rotate)}, ${parseInt(x)}, ${parseInt(y)})` }
            {...textProps}
      >{ letter }</text>
    )
  }

  static StripeBlock ({ rate, color, blockProps }) {
    let rotate = randomInt(-90, 90)

    let lines = []
    let lineWidth = 1
    let w = blockProps.width
    let h = blockProps.height

    let left = w * -0.5
    let right = w * 1.5

    for (let x = left; x < right; x += lineWidth * 6) {
      lines.push(
        <line x1={parseInt(x)}
              y1={parseInt(0)}
              x2={parseInt(x)}
              y2={parseInt(h)}
              key={`line-${x}`}
              stroke={color}
        />
      )
    }

    return (
      <svg { ...blockProps }>
        <g
          transform={`scale(1.3) rotate(${parseInt(rotate)}, ${parseInt(blockProps.width / 2)}, ${parseInt(blockProps.height / 2)})`}>
          { lines }
        </g>
      </svg>
    )
  }
}
Object.assign(ApCaptchaSvg, {
  // --------------------
  // Specs
  // --------------------

  propsTypes: {
    version: types.string,
    text: types.string.isRequired,
    width: types.number,
    height: types.number
  },

  defaultProps: {
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    text: '',
    width: 256,
    height: 92
  }
})

export default ApCaptchaSvg
