//h1 Setup
//h2 Declarations
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//h2 Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

//h2 Express
const app = express();

//h1 Pug
//h3 Pug Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//h3 Pug Utils
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//h1 Routes
//h2 Content Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);


//h2 Safety Routes
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
  res.render('error');
});

//h1 Exports
module.exports = app;
