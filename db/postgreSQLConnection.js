/* eslint-disable no-console */
const { Pool } = require('pg');
const safe = require('../safe.js');

const pool = new Pool({
  user: 'postgres',
  host: safe.AWS_LINK,
  port: 5432,
  database: 'mainphotos',
  password: safe.DB_PASS,
});

pool.on('error', (err, client) => {
  console.error(err);
  process.exit(-1);
});
// const client = new Client({
//   user: 'postgres',
//   database: 'mainphotos',
//   password: safe.DB_PASS,
// });

// client.connect()
//   .then(() => console.log('Connected to PostgreSQL'))
//   .catch((err) => console.error(err));

module.exports = {
  pool,
};
