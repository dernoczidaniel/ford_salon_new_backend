const db = require('../config/db');

const User = {
  create: function (newUser, callback) {
    db.query(
      'INSERT INTO users (name, address, email, password, city, postalcode, telefon) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [newUser.name, newUser.address, newUser.email, newUser.password, newUser.city, newUser.postalcode, newUser.telefon],
      function (err, result) {
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          console.log(result.insertId);
          callback(null, result.insertId);
        }
      }
    );
  },

  findByEmail: function (email, callback) {
    db.query('SELECT * FROM users WHERE email = ?', [email], function (err, result) {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, result[0]);
      }
    });
  },
  

};

