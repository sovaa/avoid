'use strict';
/**
 * Module dependencies.
 */
/*var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	chalk = require('chalk');*/

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

/*
// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});

// Init the express application
var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;*/

var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

app.set('views', __dirname + '/public/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.get('*', function(req, res) {
    res.render('index');
});

// Logging initialization
var port = 3000;
console.log('MEAN.JS application started on port ' + port);
app.listen(port);

exports = module.exports = app;