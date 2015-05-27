var express = require('express');
var app = express();
var path = require('path');
var config = require('./config/config');

// set the public folder to serve public assets
app.use(express.static(__dirname + '/public'));

// set up our one route to the index.html file
app.get('*', function(req, res){
	res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.listen(config.port);
console.log('Magic is happening on port ' + config.port);