let mongoose = require('mongoose');


let UserSchema = new mongoose.Schema({
    name: { type: String },
    question: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question'}],
    answer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]
}, { timestamps: true })


mongoose.model("User", UserSchema);
