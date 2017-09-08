
var express = require("express");

var path = require("path");

var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'codingasdfdozxcvzjorocks'})); 
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	if(!req.session.views){
		console.log("No count in session");
		
		req.session.views = 0;
	}
	
		
	console.log("adding count");
	req.session.views += 1;
	
	console.log(req.session.views);
 res.render("index",{count:req.session.views});
})

app.post('/add', function(req,res){
	console.log("in post");
	
	req.session.views += 1;
	
	res.redirect('/');
})

app.post('/reset', function(req,res){
	console.log(req.session.views);
	console.log("inside reset");
	
	req.session.destroy();
	
	
	res.redirect('/')
})



app.listen(8000, function() {
 console.log("listening on port 8000");
});