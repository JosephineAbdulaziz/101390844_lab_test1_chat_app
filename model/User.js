// const mongoose = require('mongoose')

// const UserScheme = new mongoose.Schema(
//     {
//         username: {
//             type: String,
//             required: [true, "Please choose a username"],
//             trim: true ,
//             unique: true 
//         },
//         firstname:{
//             type : String, 
//             required: [true, "Please enter your firstname"],
//             trim: true
//         },
//         lastname:{
//             type: String , 
//             required: [true , "Please enter your lastname"],
//             trim: true
//         },
//         password: {
//             type: String ,
//             minlength: 8 ,
//             minlength: [8, "Password must be at least 8 characters long"],
//             validate: {
//                 validator: function(value) {
//                     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(value);
//                 },
//                 message: "Password must contain one uppercase letter, one lowercase letter, one number, and one special character"
//             }

//         },
//         creationDate: {
//             type: Date,
//             default: Date.now()
//         }


//     }

// )

// // UserScheme.pre('save', async function(next) {
// //     try {
// //         const doesExist = await this.model('User').findOne({username: this.username})
// //         if (doesExist){
// //             throw new Error('Username already exist')
// //         }
// //         next()
// //     } catch (error) {
// //         next(error)
// //     }
    

// // } )

// UserScheme.post('save', (doc) => {
//     console.log(`User ${doc.username} has been saved `)
// })



// UserScheme.post('init', (doc) => {
//     console.log('%s has been initialized from the db', doc._id);
//   });
  
//   UserScheme.post('validate', (doc) => {
//     console.log('%s has been validated (but not saved yet)', doc._id);
//   });




// const User = mongoose.model("User", UserScheme)
// module.exports = User


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
        minlength: [8, "Password must be at least 8 characters long"],
        validate: {
            validator: function (value) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(value);
            },
            message: "Password must contain one uppercase letter, one lowercase letter, one number, and one special character"
        }
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

UserScheme.post('save', (doc) => {
    console.log(`User ${doc.username} has been saved`);
});

const User = mongoose.model("User", UserScheme);
module.exports = User;
