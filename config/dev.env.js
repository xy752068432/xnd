var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // DOMAIN: 'http://aps.cg0.me'
  DOMAIN: 'http://xy.cg0.me:81'
})
