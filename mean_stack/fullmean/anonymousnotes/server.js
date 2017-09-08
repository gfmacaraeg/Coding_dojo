
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app)

app.use(express.static(__dirname + '/public/dist'));

app.listen(8000, function() {
 console.log("listening on port 8000");
});