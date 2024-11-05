// models/userModel.js
const db = require('../config/db');

const User = {
  findByEmail: async (email) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE email = ?';
      db.query(query, [email], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results[0]); // Return the first user found, or undefined if not found
      });
    });
  },
  // Add other user-related methods as needed
};

module.exports = User;
