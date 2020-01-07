/* Load modules */
const express = require("express");
var createError = require('http-errors');
const app = express();
const routes=require('./app/routes/router');
const bodyParser = require("body-parser");
var user=require('./app/routes/api/user');

/* Database configuration */
const database = require('./app/config/dbconfig');
/* Init database */
database.db
database.init();
/* Init server listening */
const port = process.argv[2] || 3000;
app.listen(port, function () {
    console.log("Server listening on port : " + port);
});
app.use(function (req, res, next) {
    next(createError(404));
  });
/* Express configuration */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/user',user);
module.exports = app;