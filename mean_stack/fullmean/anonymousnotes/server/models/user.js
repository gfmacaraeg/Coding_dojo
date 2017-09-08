var mongoose = require('mongoose');



var NoteSchema = new mongoose.Schema({
	content: {
		type: String
	}
}, { timestamps: true });

NoteSchema.pre('save', function(next) {
    var note = this;
});

var Note = mongoose.model('Note', NoteSchema);
