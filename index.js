var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var fs = require('fs');
var cors = require('cors')
var app = express();

const appRoute = require('./src/Routes/index');
const DB = require("./src/db/Database")
require('dotenv').config()
app.use(morgan('dev'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
DB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api', appRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
    // res.send('404 Error caught');
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'production' ? err : {};
    // render the error page 
    return res.status(err.status || 500).render('error');
    // res.send('error');
    // res.end()
});

module.exports = app;
