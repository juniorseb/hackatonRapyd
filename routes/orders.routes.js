const express = require('express');

const ordersController = require('../controllers/orders.controller');

const router = express.Router();

router.post('/', ordersController.addOrder); // /orders

router.post('/buy', ordersController.buy); // /orders/buy

router.get('/', ordersController.getOrders); // /orders

module.exports = router;