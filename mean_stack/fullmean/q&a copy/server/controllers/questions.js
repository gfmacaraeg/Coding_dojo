let mongoose = require('mongoose');
let User = mongoose.model("User");
let Question = mongoose.model("Question");

class QuestionsController {
    index(req, res) {
        Question.find({})
            .populate({
                path: 'answers',
                model: 'Answer',
                populate: {
                    path: 'user',
                    model: 'User',
                },
            })
            .populate('user').exec((err, questions) => {
                if (err) { return res.json(err); }
                return res.json(questions);
            })
    }
    create(req, res) {
        Question.create(req.body, (err, question) => {
            if (err) { return res.json(err) }
            User.findByIdAndUpdate(req.body.user, { $push: { questions: question._id } }, { new: true }, (err, user) => {
                if (err) { return res.json(err) }
                return res.json(question);
            });
        });
    }
    show(req, res) {
        Question.findById(req.params.id).populate('user').populate({
                path: 'answers',
                model: 'Answer',
                populate: {
                    path: 'user',
                    model: 'User'
                }
            })
            .exec((err, question) => {
                if (err) { return res.json(err); }
                return res.json(question);
            })
    }
}

module.exports = new QuestionsController();