var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// custom imports
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');

var app = express(); // Creates an Express application.

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // template engine setup

app.use(logger('dev'));
app.use(express.json()); // enabled to handle req with json data
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); // localhost:3000/ 
app.use('/about', aboutRouter);

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

module.exports = app;
