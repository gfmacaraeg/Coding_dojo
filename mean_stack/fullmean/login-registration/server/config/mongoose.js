let mongoose = require('mongoose');
let fs = require('fs');

//connect to the database
mongoose.connect('mongodb://localhost/login_registration23507', { useMongoClient: true });

//update promise library
mongoose.Promise = global.Promise;

//establish the path to the models folder
let models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file){
	if(file.includes('.js')){
		console.log(`loading ${file}...`);
		require(`${models_path}/${file}`);
	}
})
