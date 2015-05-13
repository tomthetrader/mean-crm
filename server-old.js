// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express = require('express'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	mongoose = require('mongoose')
	config = require('./config/config'),
	http = require('http'),
	fs = require('fs'),
	// root = _dirname,
	app = express(),
	server = null;

// CONFIG OTHER STUFF ------------------
// Set up db
// require('./config/db')(config);

// Set up models
// var modelsPath = _dirname + '/server/models';

// fs.readdirSync(modelsPath).forEach(function (file){	
// 	if(file.indexOf('.js') >= 0){
// 		require(modelsPath + '/' + file);
// 	}
// });

require('./config/express')(app, config);
require('./config/routes')(app);

	

// // APP CONFIGURATION -----(Now done in /config/express)-------------
// // use body parser so we can grab information from POST requests
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // configure our app to handle Cross-origin resource sharing (CORS) requests
// app.use(function(req, res, next) {
//  	res.setHeader('Access-Control-Allow-Origin', '*');
//  	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//  	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \
//  Authorization');
//  	next();
// });

// // log all requests to the console
// app.use(morgan('dev'));


// ROUTES FOR OUR API
// =============================

// basic route for the home page
app.get('/', function(req, res) {
	res.send('Welcome to the home page!');
 });

// get an instance of the express router
var apiRouter = express.Router();

// test route to make sure everything is working
// accessed at GET http://localhost:8080/api
apiRouter.get('/', function(req, res) {
	res.json({ message: 'Hooray! Welcome to our api!' });
});

// more routes for our API will happen here
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', apiRouter);

// START THE SERVER
// ===============================
// Create server
var server = http.createServer(app);

// Start server
server.listen(config.port, config.host);
console.log('Express app started on port ' + config.port);
