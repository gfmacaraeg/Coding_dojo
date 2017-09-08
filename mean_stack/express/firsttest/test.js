var express = require("express");

var app = express();

app.get('/', function(request,response){
	response.send('Will route to index');



})

app.listen(8000, function(){
	console.log("listening on 8000");
})