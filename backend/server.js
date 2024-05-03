const express = require('express');
require('dotenv').config();
console.log(process.env)
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.post('/register', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, birthDate, gender, password, role } = req.body;
  
    try {
      const newUser = await pool.query(
        'INSERT INTO "Usuario" (nombre, apellido, correo, telefono, fecha_nacimiento, genero, password_hash, rol) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [firstName, lastName, email, phoneNumber, birthDate, gender, password, role]
      );
  
      res.json(newUser.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});