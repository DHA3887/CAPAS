const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: String(process.env.DB_USER).trim(),
  host: String(process.env.DB_HOST).trim(),
  database: String(process.env.DB_DATABASE).trim(),
  password: String(process.env.DB_PASSWORD).trim(), // forzar string y eliminar espacios
  port: parseInt(process.env.DB_PORT),
});

pool.connect()
  .then(() => console.log('Conexión a PostgreSQL exitosa'))
  .catch(err => console.error('Error al conectar a PostgreSQL', err));

module.exports = pool;
