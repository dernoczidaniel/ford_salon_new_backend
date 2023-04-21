const db = require('../config/db');


const Order = {
    create: function (newOrder, callback) {
      const query = 'INSERT INTO orders (name, email, model, price, color, interiorcolor, extra) VALUES (?, ?, ?, ?, ?, ?, ?)';
      const values = [newOrder.name, newOrder.email, newOrder.model, newOrder.price, newOrder.color, newOrder.interiorcolor, newOrder.extra];

      connection.query(query, values, (err, result) => {
        if (err) {
          console.error('Hiba az új rendelés beszúrása közben: ' + err.stack);
          callback(err, null);
          return;
        }

        console.log(`Az új rendelés sikeresen beszúrásra került az azonosítóval: ${result.insertId}`);
        callback(null, result.insertId);
      });
    }
  };