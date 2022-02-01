var express = require('express'); 
var bodyParser = require('body-parser');

// var connection = require('/app/config/connection');
var connection = require('./app_perpus/config/connection');
var routes = require('./app_perpus/controllers/routes');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

connection.init();
routes.configure(app);

var server = app.listen(8000, function(){
	console.log('Server listening on port : ' + server.address().port);
});