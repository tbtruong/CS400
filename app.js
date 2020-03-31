const express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();

app.set('views', path.join(__dirname, 'PS4/views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));

var ps4Router = require('./PS4/routes/ps4.js');

app.use('/ps4', ps4Router);

app.listen(5000);
