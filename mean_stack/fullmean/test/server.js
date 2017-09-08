let express = require("express");
let bp = require("body-parser");
let morgan = require('morgan');
let session = require("express-session");
let port = 8000;

let app = express();

app.use(express.static(__dirname + "/public/dist"));
app.use(bp.json());
app.use(morgan('tiny'));
app.use(session({
    secret: 'mysupersecretsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))

require('./server/config/mongoose');

require('./server/config/routes')(app);

app.listen(port, () => { console.log(`listening on ${port}...`) });