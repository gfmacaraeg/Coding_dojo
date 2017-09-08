let mongoose = require('mongoose');

let MessageSchema = new mongoose.Schema({
    message: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true })

mongoose.model('Message', MessageSchema);
