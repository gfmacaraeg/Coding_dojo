// require express
var express = require("express");

var path = require("path");

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/static"));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})

app.post('/result', function(req, res) {
 console.log("POST DATA", req.body);

 res.render('result',{data: req.body});
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io  =  require( 'socket.io'). listen(server);

io.sockets.on( 'connection', function (socket) {
console.log( "WE ARE USING SOCKETS!");
console.log(socket.id);

socket. on( "button_clicked", function (data){
    console. log( 'Someone clicked a button!  Reason: '  + data.reason);
    socket. emit( 'server_response', {response:  "sockets are the best!"});
})