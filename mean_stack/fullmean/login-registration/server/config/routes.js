//route file needs to require all the controllers
let Users = require('../controllers/users');
let path = require('path');

module.exports = function(app){
	// app.get('/', Users.new);
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.get('/users/:id', Users.show);
	app.patch('/users/:id', Users.update);
	app.delete('/users/:id', Users.destroy);

	app.post('/sessions', Users.authenticate);


	//Pass on to Angular Routing
	app.all('*', function(req, res, next) {
		res.sendFile(path.resolve('./public/dist/index.html'))
	})
}
