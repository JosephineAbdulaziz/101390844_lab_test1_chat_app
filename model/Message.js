const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    from: {
        type:String,
        required: true
    },
    room: {
        type: String,
        required: true,
    },
    message: {
        type : String,
        required: true

    },
    date_Sent: {
        type: Date,
        default: Date.now
    }
})

const Message = mongoose.model('Messages', MessageSchema)
module.exports = Message