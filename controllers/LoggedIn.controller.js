const connection = require('../config/db.js');
const jsonwebtoken = require('jsonwebtoken');

const JWT_SECRET = "OZabmrF5aS9AkQ0Dl8tBMkOKUo2csoPiBDdem0PkxQbZxC9A5J2OVBtTHdRuQ7MIwPy9IT0dhDe5J2WjHWPA19aezGmf2IYWFljh";

const Blog ={
    secretBlog(req,res){
        //console.log('ok');
        if (!req.headers.authorization){
            return res.status(401).json({message: 'No authorized!'});
        }

        const authHeader = req.headers.authorization;
        //console.log(authHeader);
        const token = authHeader.split(' ')[1];
        //console.log(token);

        try{
            // ellenőrzés email
            const { email,name,role } = jsonwebtoken.verify(token,JWT_SECRET);
            // ok
            return res.status(200).json(
                {
                    message: 'ok',
                    email: email,
                    name: name,
                    role: role
                }
                );
            // adatbázis kezelés
        } catch (error){
            return res.status(401).json({message: 'No authorized!'});
        }

    }
}

module.exports = Blog;