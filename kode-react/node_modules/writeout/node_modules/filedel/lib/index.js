/**
 * Delete files.
 * @module filedel
 * @version 4.0.0
 */

'use strict'

const filedel = require('./filedel')

const lib = filedel.bind(this)

Object.assign(lib, filedel, {
  filedel
})

module.exports = lib
