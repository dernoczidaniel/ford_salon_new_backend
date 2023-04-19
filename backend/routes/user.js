const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const User = require('../model/user');


const connection = mysql.createConnection({
  host: 'bgs.jedlik.eu',
  user: 'fordszalon',
  password: 'Fsz2023',
  database: 'fordszalon'
});

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register Page',
        message: req.session.message
    });
});

router.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const telefon = req.body.telefon;
  const address = req.body.address;
  const postalcode = req.body.postalcode;
  const city = req.body.city;
  const birthdate = req.body.birthdate;

  const query = 'SELECT * FROM users WHERE email = ?';

  connection.query(query, [email], (error, results) => {
    if (error) throw error;

    if (results.length > 0) {
      res.status(409).json({ message: 'A user with this email already exists.' });
    } else {
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) throw error;

        const insertQuery = 'INSERT INTO users (name, email, password, telefon, address, postalcode, city, birthdate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

        connection.query(insertQuery, [name, email, hash, telefon, address, postalcode, city, birthdate], (error, results) => {
          if (error) throw error;

          req.session.message = 'Registration successful. Please login.';
          res.status(200).json({ message: 'Registration successful. Please login.' });
        });
      });
    }
  });
});


router.get('/dashboard', (req, res) => {
    if (!req.session.userId) {
        res.redirect('/login');
    } else {
        const query = 'SELECT * FROM users WHERE id = ?';

        connection.query(query, [req.session.userId], (error, results) => {
            if (error) throw error;

            const user = results[0];
            res.render('dashboard', {
                title: 'Dashboard',
                user: user
            });
        });
    }
});

module.exports = router;
