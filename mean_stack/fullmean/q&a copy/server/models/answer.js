let mongoose = require('mongoose');

let AnswerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: [true, 'Answer cannot be blank.'],
        minlength: [5, 'Answer must be at least 8 characters.']
    },
    likes: {
        type: Number,
        default: 0
    },
    details: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' }
}, { timestamps: true });

mongoose.model("Answer", AnswerSchema);