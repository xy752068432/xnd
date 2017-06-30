var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DOMAIN: 'http://xy.cg0.me:81'
  // DOMAIN: 'http://aps.cg.com'
})
