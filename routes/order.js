const express = require('express');
const router = express.Router();
const db = require('../config/db');
const bodyParser = require('body-parser');
const mysql = require('mysql');


router.post('/orders', (req, res) => {
  const orderData = req.body;

  // Rendelés adatok ellenőrzése
  if (!orderData.name || !orderData.email || !orderData.model || !orderData.price || !orderData.color || !orderData.interiorcolor || !orderData.extra) {
    res.status(400).send('Hiányzó adatok a rendelésben');
    return;
  }

  // Rendelés mentése az adatbázisba
  db.query(
    'INSERT INTO orders (name, email, model, price, color, interiorcolor, extra) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [orderData.name, orderData.email, orderData.model, orderData.price, orderData.color, orderData.interiorcolor, orderData.extra],
    (err, result) => {
      if (err) {
        console.error('Hiba az új rendelés beszúrása közben: ' + err.stack);
        res.status(500).send('Hiba az új rendelés mentése közben');
        return;
      }

      res.status(201).send(`Az új rendelés sikeresen mentve az azonosítóval: ${result.insertId}`);
    }
  );
});

module.exports = router;