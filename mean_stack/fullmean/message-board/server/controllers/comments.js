let mongoose = require('mongoose');
let User = mongoose.model("User");
let Message = mongoose.model("Message");
let Comment = mongoose.model("Comment");

class CommentsController { 
    create(req, res){
        Comment.create(req.body, (err, comment) => {
            Message.findByIdAndUpdate(req.body.message, { $push: { comments: comment._id } }, { new: true }, (err, message) => {
                if(err) { return res.json(err) }
                User.findByIdAndUpdate(req.body.user, { $push: { comments: comment._id } }, { new: true }, (err, user) => {
                    if(err) { return res.json(err) }
                    return res.json(comment)
                })
            })
        })
    }
}

module.exports = new CommentsController();