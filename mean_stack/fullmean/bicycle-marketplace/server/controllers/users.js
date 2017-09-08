let mongoose = require('mongoose');
let User = mongoose.model("User");

class UsersController { 
    create(req, res){
        User.create(req.body, (err, user) => {
            if(err){ return res.json(err) }
            req.session.user_id = user._id;
            return res.json(user);
        })
    }
    authenticate(req, res){
        User.findOne({ email: req.body.email }, (err, user) => {
            if(err){ return res.json(err) }
            if(user && user.authenticate(req.body.password)){
                req.session.user_id = user._id;
                return res.json({
                    status: true,
                    user: user
                })
            }
            return res.json({
                status: false,
                errors: {
                    login: {
                        message: 'Invalid credentials'
                    }
                }
            })
        })
    }
    session(req, res){
        if(req.session.user_id){
            return res.json({
                status: true,
                user_id: req.session.user_id
            })
        }
        return res.json({
            status: false
        })
    }
    logout(req, res){
       if(req.session.user_id){
           delete req.session.user_id
       }
       return res.json(true)
    }
}

module.exports = new UsersController();