const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const db = mysql.createConnection({
  host: process.env.DB_HOST, // Get host from environment variable
  user: process.env.DB_USER, // Get user from environment variable
  password: process.env.DB_PASSWORD, // Get password from environment variable
  database: process.env.DB_NAME, // Get database name from environment variable
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

module.exports = db;
