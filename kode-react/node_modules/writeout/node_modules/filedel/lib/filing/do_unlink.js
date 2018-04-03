/**
 * @function doUnlink
 * @returns {Promise}
 */
'use strict'

const fs = require('fs')

/** @lends doUnlink */
async function doUnlink (filename, force) {
  if (force) {
    await new Promise((resolve, reject) =>
      fs.chmod(filename, '666', (err) =>
        err ? reject(err) : resolve()
      )
    )
  }
  await new Promise((resolve, reject) =>
    fs.unlink(filename, (err) =>
      err ? reject(err) : resolve()
    )
  )
}

module.exports = doUnlink
