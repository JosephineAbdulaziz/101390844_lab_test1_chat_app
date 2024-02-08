const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please choose a username"],
        trim: true,
        unique: true
    },
    firstname: {
        type: String,
        required: [true, "Please enter your firstname"],
        trim: true
    },
    lastname: {
        type: String,
        required: [true, "Please enter your lastname"],
        trim: true
    },
    password: {
        type: String,
        minlength: [8, "Password must be at least 8 characters long"]
    
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

UserScheme.post('save', (doc) => {
    console.log(`User ${doc.username} has been saved`);
});

UserScheme.statics.getUser = function(name) {  
    return this.find({ username: name });
  }
  

const User = mongoose.model("User", UserScheme);
module.exports = User;
