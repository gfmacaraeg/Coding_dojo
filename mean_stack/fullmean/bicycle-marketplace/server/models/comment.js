var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	comment: {type: String},
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	message: [{type: mongoose.Schema.Types.ObjectId, ref: 'Message'}]

}, { timestamps: true});


mongoose.model('Comment', CommentSchema);