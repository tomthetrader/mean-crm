// EXPRESS SETTINGS
// =============================

var express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser');

// Setup express router	
var apiRouter = express.Router();



module.exports = function(app, config) {
	app.configure(function () {
    	// app.use(express.compress());	// this is now "compression" in Express 4
    	app.set('port', config.port);

    	// app.use(express.logger('dev'));	// use morgan instead
    	app.use(morgan('dev'));
    
    	app.use(bodyParser.urlencoded({ extended: true }));
    	app.use(bodyParser.json());
    	
    	// app.use(express.methodOverride());   // now "method-override" in express 4

		// this is where we will server our RESTful API
    	app.use('/api', apiRouter); 
    	// app.use('/api', app.router);   
    	// app.use('/', express.static(__dirname + "/../client"));
    
    	// Config app to handle Cross-origin (CORS) requests
    	app.use(function(req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
			res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,\Authorization');
			next();
		});
  	});
};