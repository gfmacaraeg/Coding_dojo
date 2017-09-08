let mongoose = require('mongoose');
let User = mongoose.model("User");
let Question = mongoose.model("Question");

class QuestionsController {
    index(req, res) {
        Question.find({})
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
        Question.findById(req.params.id).populate('user')
            .exec((err, question) => {
                if (err) { return res.json(err); }
                return res.json(question);
            })
    }
    delete(req, res) {
        console.log(req.params.id);
        Question.find( { _id: req.params.id }).remove()
            .exec((err, deleted) => {
                if (err) { return res.json(err); }
                return res.json(deleted);
            })
    }

    increasevotes(req, res) {
        let optionname = ""
        console.log(req.params.id, req.params.option)
        if(req.params.option == '1'){
                Question.findByIdAndUpdate(
                req.params.id, { $inc: { "firstoption.vote": 1 } }, { new: true },
                (err, answer) => {
                    if (err) { return res.json(err) }
                    return res.json(answer);
                }
            )
        }
         if(req.params.option == '2'){
                Question.findByIdAndUpdate(
                req.params.id, { $inc: { "secondoption.vote": 1 } }, { new: true },
                (err, answer) => {
                    if (err) { return res.json(err) }
                    return res.json(answer);
                }
            )
        }
        if(req.params.option == '3'){
                Question.findByIdAndUpdate(
                req.params.id, { $inc: { "thirdoption.vote": 1 } }, { new: true },
                (err, answer) => {
                    if (err) { return res.json(err) }
                    return res.json(answer);
                }
            )
        }
        if(req.params.option == '3'){
                Question.findByIdAndUpdate(
                req.params.id, { $inc: { "thirdoption.vote": 1 } }, { new: true },
                (err, answer) => {
                    if (err) { return res.json(err) }
                    return res.json(answer);
                }
            )
        }
        if(req.params.option == '4'){
                Question.findByIdAndUpdate(
                req.params.id, { $inc: { "fourthoption.vote": 1 } }, { new: true },
                (err, answer) => {
                    if (err) { return res.json(err) }
                    return res.json(answer);
                }
            )
        }


    }
}
module.exports = new QuestionsController();