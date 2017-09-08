let mongoose = require('mongoose');
let User = mongoose.model("User");

class UsersController {
    create(req, res) {
        User.findOne({ name: req.body.name }, (err, user) => {
            if (err) { return res.json(err) } else if (!user) {
                User.create(req.body, (err, user) => {
                    if (err) { return res.json(err) }
                    return res.json(user);
                });
            } else {
                return res.json(user);
            }
        });
    }
}

module.exports = new UsersController();