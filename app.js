const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const {verifyToken} = require('./middlewares/auth');

const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//  Configurar --> CORS
app.use((req, res, next) =>{
 res.header('Access-Control-Allow-Origin', '*'); // Permitir acceso a todos los dominios
 res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Athorization');
 if (req.method === 'OPTIONS') {
   res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
   return res.status(200).json({});
 }
 next();
});

app.use('/products', verifyToken, productsRouter);
app.use('/orders', verifyToken, ordersRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.error(err);
});

module.exports = app;
