let mongoose = require('mongoose');
let User = mongoose.model('User');
// let bcrypt = require('bcryptjs')

module.exports = {
	index: function(req, res){
		User.find({}, function(err, users){
			if(err){
				return res.json(err);
			}
			return res.json(users);
		})
	},
	create: function(req, res){
		console.log(req.body);
		User.create(req.body, function(err, user){
			if(err){
				return res.json(err);
			} else {
				console.log('user saved succesfully...')
				return res.json(user);
			}
		})
	},
	authenticate: function(req, res){
		//look up the email
		User.findOne({ email: req.body.email }, function(err, user){
			if(err){
				return res.json(err);
			}
			else if(user && user.authenticate(req.body.password)){
				return res.json(user);
			} else {
				return res.json({
					errors: {
						password: {
							message: 'Invalid credentials.'
						}
					}
				})
			}
		})
	},
	update: function(req, res){
		//look up the user object
		User.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, user){
			if(err){
				return res.json(err);
			} else {
				console.log('user succesfully updated')
				return res.json(user);
			}
		})
	},
	show: function(req, res){
		User.findById(req.params.id, function(err, user){
			if(!user){
				return res.json({
					errors: 'Invalid user ID'
				})
			}
			if(err){
				return res.json(err);
			}
			return res.json(user);
		})
	},
	destroy: function(req, res){
		User.findByIdAndRemove(req.params.id, function(err, user){
			if(err){
				return res.json(err);
			}
			return res.json(user);
		})
	}
}