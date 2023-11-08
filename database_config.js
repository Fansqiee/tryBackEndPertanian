const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_PERTANIAN
});
pool.connect((err) => {
  if (err) {
    console.error('connection to database error', err.stack);
  } else {
    console.log('connected to PERTANIAN DB');
  }
});

module.exports = pool;