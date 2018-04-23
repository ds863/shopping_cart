const express = require("express");
const path = require('path');
const bodyParser = require('body-parser')
const cookie = require('cookie-parser')
const cookieSession = require('cookie-session')

require('./config/db');

const app = express();

app.use(cookie());
app.use(cookieSession({secret: '123'}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRouter = require('./routes/index');
const ordersRouter = require('./routes/orders');
const customersRouter = require('./routes/customers');
const productsRouter = require('./routes/products');
const logInRouter = require('./routes/log');
const registerRouter = require('./routes/register');


const userRouter = require('./modules/user/routes');

app.use(express.static('./static'));




app.use('/', indexRouter);
app.use('/customers',  customersRouter);
app.use('/orders',  ordersRouter);
app.use('/products', productsRouter);
app.use('/login', logInRouter)
app.use('/register', registerRouter)
app.use('/user', userRouter);
app.listen(1337);
module.exports = app;
