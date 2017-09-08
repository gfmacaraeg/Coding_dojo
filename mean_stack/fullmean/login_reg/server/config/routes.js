var usersController = require('../controllers/users.js');
module.exports = function(app) {
	app.get('/', usersController.index),
	app.post('/register', usersController.create),
	app.post('/login', usersController.authenticate)
}