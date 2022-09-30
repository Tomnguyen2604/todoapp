require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { client } = require('./db');

// initialize app
const app = express();

// use json formatting
app.use(express.json());

// set cors to only access from frontend
app.use(cors({ origin: process.env.CLIENT_URL }));

// declare port
const PORT = 5000;

// listen to port
client
  .connect()
  .then(() => {
    console.log(`Connected to postgres instance successfully`);
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((err) => console.error(`Connection error occurred`, err.stack));

// get all todos
app.get('/todo', async (req, res) => {
  try {
    const data = await client.query(`SELECT * FROM TODO`);
    return res.status(200).json(data.rows);
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

// create a todo
app.post('/todo', async (req, res) => {
  try {
    const data = await client.query(
      `INSERT INTO TODO (description) VALUES ($1) RETURNING *`,
      [req.body.description]
    );
    return res.status(201).json(data.rows);
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

// update a todo
app.put('/todo/:id', async (req, res) => {
  try {
    const data = await client.query(
      `UPDATE TODO SET completed = NOT completed WHERE id = $1 RETURNING *`,
      [req.params.id]
    );
    return res.status(200).json(data.rows);
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

// delete a todo
app.delete('/todo/:id', async (req, res) => {
  try {
    const data = await client.query('DELETE FROM TODO where id = $1;', [
      req.params.id,
    ]);
    return res.status(200).json(req.params.id);
  } catch (err) {
    return res.status(400).json(err.message);
  }
});
