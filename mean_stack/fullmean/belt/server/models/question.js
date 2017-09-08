let mongoose = require('mongoose');

let QuestionSchema = new mongoose.Schema({
    question: { type: String },
    description: {type: String},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]
}, { timestamps: true })

mongoose.model('Question', QuestionSchema);
