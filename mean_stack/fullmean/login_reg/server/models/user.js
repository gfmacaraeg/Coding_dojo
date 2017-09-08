var mongoose = require('mongoose');

var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var UserSchema = new mongoose.Schema({
	name: {
		first: {
			type: String,
			require: [true, "Must input first name."],
			trim: true
		},
		last: {
			type: String, 
			required: [true, "Must input last name."],
			trim: true
		}
	},
	email: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
		required: "Email address is required.",
		validate: [validateEmail, "Please fill a valid email address"],
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
		maxlength: 32
	},
	confirm_password: {
		type: String, 
		required: true,
		minlength: 8
	},
	dob: {
		type: Date,
		required: [true, "Must input birth date."]
	}
}, { timestamps: true });

UserSchema.pre('save', function(next) {
    var user = this;

// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) return next();

// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

    bcrypt.hash(user.confirm_password, salt, function (err, hash){
    	if (err) return next(err);
    })

        // override the cleartext password with the hashed one
        user.password = hash;
        user.confirm_password = hash;
        next();
    });
});


});

UserSchema.methods.authenticate = function(password) {
   return bcrypt.compareSync(password, this.password)
};


var User = mongoose.model('User', UserSchema);
