
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./web.cjs.production.min.js')
} else {
  module.exports = require('./web.cjs.development.js')
}
