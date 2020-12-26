const knex =  require('knex')
const config = require('../adopetBd')

const connection = knex(config)
module.exports = connection