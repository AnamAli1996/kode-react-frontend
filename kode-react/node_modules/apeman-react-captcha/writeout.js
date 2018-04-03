/**
 * @function writeoutSVG
 */
'use strict'

const { ApCaptchaSvg } = require('./shim/node')
const { randomInt } = require('randomval')
const co = require('co')
const uuid = require('uuid')
const writeout = require('writeout')
const { markup } = require('breact')
const path = require('path')

/** @lends writeoutSVG */
function writeoutSVG (dirname, options = {}) {
  let {
    count = 10,
    width = 512,
    height = 184
  } = options
  return co(function * () {
    let index = {}
    for (let i = 0; i < count; i++) {
      let id = uuid.v4()
      let text = String(randomInt(1000, 9999))
      index[ id ] = text
      let filename = path.resolve(dirname, `${id}.svg`)
      let content = markup(ApCaptchaSvg, { text, width, height })
      yield writeout(filename, content, {
        mkdirp: true
      })
    }
    let indexFile = path.resolve(dirname, '.index.json')
    yield writeout(indexFile, JSON.stringify(index, null, 2), {
      force: true
    })
  })
}

module.exports = writeoutSVG
