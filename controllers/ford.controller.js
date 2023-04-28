const connection = require('../config/db');





const Ford = {
    //
    getCars(req,res){
        let sql= 'SELECT * FROM cars';
        connection.query(sql, (err,data) => {
            if (err){
                res.status(500).send({
                    message: err.message || "Database error"
                });
            } else {
                res.send(data);
                // res.send(data.map(x => x.fnev))
            }
        })
    },
    getCarsById(req,res){
        let sql= 'SELECT * FROM cars WHERE id';
        connection.query(sql, (err,data) => {
            if (err){
                res.status(500).send({
                    message: err.message || "Database error"
                });
            } else {
                res.send(data);
                // res.send(data.map(x => x.fnev))
            }
        })
    },
    getModels(req,res){
        let sql= 'SELECT * FROM models';
        connection.query(sql, (err,data) => {
            if (err){
                res.status(500).send({
                    message: err.message || "Database error"
                });
            } else {
                res.send(data);
                // res.send(data.map(x => x.fnev))
            }
        })
    },
    getExtras(req,res){
        let sql= 'SELECT * FROM extras';
        connection.query(sql, (err,data) => {
            if (err){
                res.status(500).send({
                    message: err.message || "Database error"
                });
            } else {
                res.send(data);
                // res.send(data.map(x => x.fnev))
            }
        })
    },
    getPayment(req,res){
        let sql= 'SELECT * FROM payment';
        connection.query(sql, (err,data) => {
            if (err){
                res.status(500).send({
                    message: err.message || "Database error"
                });
            } else {
                res.send(data);
                // res.send(data.map(x => x.fnev))
            }
        })
    },
    getSalons(req,res){
        let sql= 'SELECT * FROM salons';
        connection.query(sql, (err,data) => {
            if (err){
                res.status(500).send({
                    message: err.message || "Database error"
                });
            } else {
                res.send(data);
                // res.send(data.map(x => x.fnev))
            }
        })
    },
    getUsers(req,res){
        let sql= 'SELECT * FROM users';
        connection.query(sql, (err,data) => {
            if (err){
                res.status(500).send({
                    message: err.message || "Database error"
                });
            } else {
                res.send(data);
                // res.send(data.map(x => x.fnev))
            }
        })
    },
    getOrders(req,res){
        let sql= 'SELECT * FROM orders';
        connection.query(sql, (err,data) => {
            if (err){
                res.status(500).send({
                    message: err.message || "Database error"
                });
            } else {
                res.send(data);
                // res.send(data.map(x => x.fnev))
            }
        })
    },

}



module.exports = Ford;