require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

const executeQuery = async (query) => {
  try {
    await client.connect();
    await client.query(query);
  } catch (err) {
    console.error({ err });
    return false;
  } finally {
    await client.end();
  }
};

module.exports = { client, executeQuery };
