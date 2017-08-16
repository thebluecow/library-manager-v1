const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const connect = require('connect');
// method-override to use ?method=put
var methodOverride = require('method-override');

const routes = require('./src/routes/routes');

const app = express();

// set the view engine to use pug and the views folder as the default directory
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug')

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src/public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;