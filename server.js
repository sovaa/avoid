'use strict';

var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.get('*', function(req, res) {
    res.render('index');
});

// Logging initialization
var port = 3000;
console.log('MEAN.JS application started on port ' + port);
app.listen(port);