module.exports = (app) =>{
    const router = require('express').Router(); // router tárolja a útvonalakat
    const ford = require('../controllers/ford.controller');


    router.get('/ford/getCars',ford.getCars)
    router.get('/ford/getModels',ford.getModels)
    router.get('/ford/getExtras',ford.getExtras)
    router.get('/ford/getPayment',ford.getPayment)
    router.get('/ford/getSalons',ford.getSalons)
    router.get('/ford/getUsers',ford.getUsers)
    router.get('/ford/getOrders',ford.getOrders)


    
    app.use('/api',router); // default route név
}