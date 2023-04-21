const connection = require('../config/db');
// https://jwt.io/
// const jsonwebtoken = require('jsonwebtoken');

// // https://randomstr.com/
// const JWT_SECRET = "OZabmrF5aS9AkQ0Dl8tBMkOKUo2csoPiBDdem0PkxQbZxC9A5J2OVBtTHdRuQ7MIwPy9IT0dhDe5J2WjHWPA19aezGmf2IYWFljh";




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

}

// const Auth = {
//     login(req,res){
//         //console.log('ok',req.body.email,req.body.password);
//         const sql = 'select * from users where email = ? and password = md5(?)';
//         connection.query(sql,[req.body.email,req.body.password],(err,data)=>{
//             if (err){
//                 res.status(500).send({message: err.message})
//             } else {
//                 //console.log(data);
//                 if (data.length != 0){
//                     return res.json({
//                         token: jsonwebtoken.sign({
//                             email: data[0].email,
//                             name: data[0].name,
//                             role: data[0].role
//                         },JWT_SECRET)
//                     })
//                 } else {
//                     return res.status(401).send({message: 'Unauthorized'});
//                 }
//             }
//         })

//     }
// }

// module.exports = Auth;

module.exports = Ford;