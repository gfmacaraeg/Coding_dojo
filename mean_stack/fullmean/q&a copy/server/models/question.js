let mongoose = require('mongoose');

let QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question cannot be blank.'],
        minlength: [10, 'Question must at least 10 characters.']
    },
    desc: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }]
}, { timestamps: true });

mongoose.model('Question', QuestionSchema);