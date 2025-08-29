// __define-ocg__: Express server with /health and users CRUD
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const db = require('./db');

const PORT = process.env.PORT || 5040;
const app = express();
app.use(cors());
app.use(bodyParser.json());

// health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// create user
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'name and email required' });
  const id = uuidv4();
  try {
    await db.query('INSERT INTO users (id, name, email) VALUES ($1, $2, $3)', [id, name, email]);
    const { rows } = await db.query('SELECT id, name, email, created_at FROM users WHERE id=$1', [id]);
    res.status(201).json(rows[0]);
  } catch (err) {
    if (err.code === '23505') return res.status(409).json({ error: 'email already exists' });
    console.error(err);
    res.status(500).json({ error: 'internal error' });
  }
});

// list users
app.get('/users', async (req, res) => {
  const { rows } = await db.query('SELECT id, name, email, created_at FROM users ORDER BY created_at DESC LIMIT 100');
  res.json(rows);
});

// get user
app.get('/users/:id', async (req, res) => {
  const { rows } = await db.query('SELECT id, name, email, created_at FROM users WHERE id=$1', [req.params.id]);
  if (!rows[0]) return res.status(404).json({ error: 'not found' });
  res.json(rows[0]);
});

// delete user
app.delete('/users/:id', async (req, res) => {
  await db.query('DELETE FROM users WHERE id=$1', [req.params.id]);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`API listening on ${PORT}`);
});
