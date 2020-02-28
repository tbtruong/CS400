const express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();

app.set('views', path.join(__dirname, 'PS3/views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));

var ps3Router = require('./PS3/routes/ps3.js');

app.use('/ps3', ps3Router);

app.listen(5000);
