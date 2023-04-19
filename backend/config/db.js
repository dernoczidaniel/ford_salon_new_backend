const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'bgs.jedlik.eu',
    user: 'fordszalon',
    password: 'Fsz2023',
    database: 'fordszalon'
});



module.exports = connection;

