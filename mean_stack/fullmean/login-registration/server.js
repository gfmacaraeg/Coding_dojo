let express = require('express');
let bp = require('body-parser');


let app = express();

app.use(express.static(__dirname + '/public/dist'));
app.use(bp.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

//require the mongoose connection file
require('./server/config/mongoose');

//require the routing file
require('./server/config/routes')(app);

app.listen(8000, function(){
	console.log('listening on port 8000...');
})