/* eslint-disable no-console */
const { Client } = require('pg');
const safe = require('../safe.js');

const client = new Client({
  user: 'postgres',
  database: 'mainphotos',
  password: safe.DB_PASS,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error(err));

module.exports = {
  client,
};
