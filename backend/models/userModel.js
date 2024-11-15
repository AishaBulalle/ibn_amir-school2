const db = require('../config/db');

const User = {
  findByEmail: async (email) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE email = ?';
      db.query(query, [email], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results[0]);
      });
    });
  },
};

module.exports = User;
