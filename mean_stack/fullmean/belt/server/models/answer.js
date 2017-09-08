let mongoose = require('mongoose');

let AnswerSchema = new mongoose.Schema({
    answer: { type: String },
    details: { type: String },
    likes: { type: Number},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' }
}, { timestamps: true });

mongoose.model("Answer", AnswerSchema);