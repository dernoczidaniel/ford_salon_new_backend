const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

const connection = mysql.createConnection({
    host: 'bgs.jedlik.eu',
    user: 'fordszalon',
    password: 'Fsz2023',
    database: 'fordszalon'
});

// Login page
router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login Page',
        message: req.session.message
    });
});

// Login endpoint
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const query = 'SELECT * FROM users WHERE email = ?';

    connection.query(query, [email], (error, results) => {
        if (error) throw error;

        if (results.length == 0) {
            res.status(400).json({ message: 'Invalid email or password' });
        } else {
            const user = results[0];

            bcrypt.compare(password, user.password, (error, result) => {
                if (result === true) {
                    // Generate a JWT token
                    const token = jwt.sign({ userId: user.id }, 'secret_key');

                    // Get user details from the database
                    const userDetailsQuery = 'SELECT name, email, telefon, city, postalcode, address FROM users WHERE id = ?';
                    connection.query(userDetailsQuery, [user.id], (error, userDetailsResults) => {
                        if (error) throw error;

                        // Send the token and user details in the response
                        res.json({ message: 'Login successful', token: token, user: userDetailsResults[0] });
                    });
                } else {
                    res.status(400).json({ message: 'Invalid email or password' });
                }
            });
        }
    });
});


// Logout endpoint
router.get('/logout', (req, res) => {
    req.session.destroy((error) => {
        if (error) throw error;
        res.redirect('/login');
    });
});

module.exports = router;
