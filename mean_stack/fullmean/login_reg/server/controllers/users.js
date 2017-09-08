var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
	index: function(req, res){
		res.render('index')
	},
	create: function(req, res){
		User.findOne({ email: req.body.email }, function(err, user){
			if(err){
				console.log(err);
			}
			console.log('user object: ', user);
			if(user === null) {
				User.create(req.body, function(err, user){
					//before creating the user query the db for the email
					if(err){
						console.log('error object: ', err)
						var errors_arr = [];
						for(key in err.errors){
							var error = err.errors[key];
							errors_arr.push(error.message);
							console.log(error.message)
						}
					} else {
						console.log(user + " added successfully!");
					}
				})
			}
			return res.redirect('/')
		})
		return;
		// res.redirect('/')
	},	
  	authenticate: function(req, res){
    User.findOne({ email: req.body.email }, function(err, user){
		if(err){
			console.log("Invalid Email")
	      }
	     else if(user && user.authenticate(req.body.password)){
	        console.log('User logged in');
	        res.render('success', {user: user})
	     } else {
	       console.log('Invalid Password');
	     }
    })
  }
}