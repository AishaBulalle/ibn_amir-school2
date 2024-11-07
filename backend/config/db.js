const mysql = require('mysql2');

//const db = mysql.createConnection({
//host: 'localhost',
//user: 'root',
// password: 'aisha123',
//database: 'ibn_amir_school2',
//});

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', // Default to localhost for local development
  user: process.env.DB_USER || 'root', // Default to root for local development
  password: process.env.DB_PASS || process.env.DB_PASSWORD, // Get the password from the environment variable
  database: process.env.DB_NAME || 'ibn_amir_school2', // Default to your database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

module.exports = db;
