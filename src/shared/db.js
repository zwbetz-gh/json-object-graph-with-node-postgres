require('dotenv').config();
const {Pool} = require('pg');

function configurePool() {
  return new Pool({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
  });
}

async function query(pool, text, params) {
  try {
    const res = await pool.query(text, params);
    return res;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = {
  configurePool,
  query
};
