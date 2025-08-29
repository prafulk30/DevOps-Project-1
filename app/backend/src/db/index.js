// __define-ocg__: simple pg client wrapper
const { Pool } = require('pg');
const connectionString =
  process.env.DATABASE_URL || 'postgresql://postgres:postgres@db:5432/bigproj';

const pool = new Pool({ connectionString });

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};
