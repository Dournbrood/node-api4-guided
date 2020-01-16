const knex = require('knex');

const environment = process.env.DB_ENV || 'development';
const config = require('../knexfile')[environment];
console.log(config);

module.exports = knex(config);
