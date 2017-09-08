let mongoose = require('mongoose');


let UserSchema = new mongoose.Schema({
    name: { type: String },
    question: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question'}]
}, { timestamps: true })


mongoose.model("User", UserSchema);
