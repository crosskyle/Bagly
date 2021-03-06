// Determine if credentials used are dev or prod credentials

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod')
}
else {
  module.exports = require('./dev')
}
