/**
 * @function isDir
 * @returns {Promise}
 */

'use strict'

const {existsAsync, statAsync} = require('asfs')

/** @lends isDir */
async function isDir (filename) {
  const exists = await existsAsync(filename)
  if (!exists) {
    return
  }
  try {
    const stats = await statAsync(filename)
    return stats.isDirectory()
  } catch (e) {
    // Ignore error.
  }
}

module.exports = isDir
