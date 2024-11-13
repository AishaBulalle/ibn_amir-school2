const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const db = mysql.createConnection({
  host: process.env.DB_HOST, // Host from the .env file
  user: process.env.DB_USER, // User from the .env file
  password: process.env.DB_PASSWORD, // Password from the .env file
  database: process.env.DB_NAME, // Database from the .env file
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

module.exports = db;
