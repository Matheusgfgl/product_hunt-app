const express = require('express');

const routes = express.Router();

const productController = require('./controller/productController')

routes.get('/products', productController.index);

routes.get('/products/:id', productController.show);

routes.post('/products', productController.create );

routes.delete('/products/:id', productController.delete );

module.exports = routes;