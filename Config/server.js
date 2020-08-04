var express = require('express');
var consign = require('consign');


var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')

//rotas via consign, inclui todas as rotas que estiveram no app/routes
consign()
    .include('app/routes')
    .then('Config/dbConnection.js')
    .then('app/models')
    .into(app);



module.exports = app;