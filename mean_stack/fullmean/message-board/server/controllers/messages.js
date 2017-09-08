let mongoose = require('mongoose');
let User = mongoose.model("User");
let Message = mongoose.model("Message");

class MessagesController {
    index(req, res){
        Message.find({})
        .populate({
            path: 'comments',
            model: 'Comment',
            populate: {
                path: 'user',
                model: 'User'
            }
        })
        .populate('user').exec((err, messages) => {
            if(err){ return res.json(err) }
            return res.json(messages);
        })
    }
    create(req, res){
        Message.create(req.body, (err, message) => {
            if(err){ return res.json(err) }
            User.findByIdAndUpdate(req.body.user, { $push: { messages: message._id } }, { new: true }, (err, user) => {
                if(err){ return res.json(err) }
                return res.json(message);
            })
        })
    }
    show(req, res){
        Message.findById(req.params.id).populate({
            path: 'comments',
            model: 'Comment',
            populate: {
                path: 'user',
                model: 'User'
            }
        })
        .exec((err, message) => {
            if(err) { return res.json(err) }
            return res.json(message);
        })
    }
}

module.exports = new MessagesController();