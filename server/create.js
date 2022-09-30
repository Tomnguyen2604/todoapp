require('dotenv').config();

const { executeQuery } = require('./db');

const createQuery = `
  DROP TABLE IF EXISTS "todo";
  CREATE TABLE IF NOT EXISTS "todo" (
    id SERIAL,
    completed BOOLEAN DEFAULT FALSE,
    description TEXT,
    PRIMARY KEY ("id")
  );`;

executeQuery(createQuery).then((res) => console.log('Table created'));
