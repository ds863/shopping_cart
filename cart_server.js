var express = require("express");
var path = require('path');
var bodyParser = require('body-parser')
var cookie = require('cookie-parser')
var cookieSession = require('cookie-session')

var app = express();


app.use(cookie());
app.use(cookieSession({secret: '123'}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var indexRouter = require('./routes/index');
var ordersRouter = require('./routes/orders');
var customersRouter = require('./routes/customers');
var productsRouter = require('./routes/products');
var logInRouter = require('./routes/log');
app.use(express.static('./static'));

app.use('/', indexRouter);
app.use('/customers',  customersRouter);
app.use('/orders',  ordersRouter);
app.use('/products', productsRouter);
app.use('/login', logInRouter)
app.listen(80);
module.exports = app;