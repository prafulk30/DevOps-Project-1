// __define-ocg__: run this to create sample table
const db = require('./index');

async function migrate() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `);
  console.log('migrations applied');
  process.exit(0);
}

migrate().catch(err => {
  console.error(err);
  process.exit(1);
});
