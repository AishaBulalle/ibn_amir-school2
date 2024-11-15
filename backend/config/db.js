const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST, // MySQL Host, will be different locally and in Azure
  user: process.env.MYSQL_USER, // MySQL Username
  password: process.env.MYSQL_PASSWORD, // MySQL Password
  database: process.env.MYSQL_DATABASE,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

module.exports = db;
