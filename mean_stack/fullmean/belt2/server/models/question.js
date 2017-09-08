let mongoose = require('mongoose');

let QuestionSchema = new mongoose.Schema({
    question: {
    	type: String,
    	required: [true, "Must input Question"],
    	minlength: [8, "Question must be at least 8 characters"]
    },
    firstoption: {
		optionname: {
			type: String,
			required: [true, "Must input option 1 name."],
			minlength: [3, "Option 1 must be at least 3 characters"]
		},
		vote: {
			type: Number, 
			default: 0
		}
	},
  secondoption: {
		optionname: {
			type: String,
			required: [true, "Must input option 2 name."],
			minlength: [3, "Option 2 must be at least 3 characters"]
		},
		vote: {
			type: Number, 
			default: 0
		}
	},
  thirdoption: {
		optionname: {
			type: String,
			required: [true, "Must input option 3 name."],
			minlength: [3, "Option 3 must be at least 3 characters"]
		},
		vote: {
			type: Number, 
			default: 0
		}
	},
fourthoption: {
		optionname: {
			type: String,
			required: [true, "Must input option 4 name."],
			minlength: [3, "Option 4 must be at least 3 characters"]
		},
		vote: {
			type: Number, 
			default: 0
		}
	},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true })

mongoose.model('Question', QuestionSchema);
