var express = require("express");
var path = require('path');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var indexRouter = require('./routes/index');
var ordersRouter = require('./routes/orders');
var customersRouter = require('./routes/customers');
var productsRouter = require('./routes/products');

app.use('/', indexRouter);
app.use('/customers',  customersRouter);
app.use('/orders',  ordersRouter);
app.use('/products', productsRouter);

app.listen(80);
module.exports = app;