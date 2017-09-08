let mongoose = require('mongoose');
let bcrypt = require("bcryptjs");

let UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message'}],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true })

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
    next();
})

UserSchema.methods.authenticate = function(password) {
    return bcrypt.compareSync(password, this.password);
}

mongoose.model("User", UserSchema);
