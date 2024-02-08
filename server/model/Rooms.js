const mongoose = require('mongoose');

const RoomScheme = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
    },
    room: {
        type: String,

    },
    // planet: {
    //     type: Boolean,
    //     default: false

    // },
    // sport: {
    //     type: Boolean,
    //     default: false

    // },
    // food: {
    //     type: Boolean,
    //     default: false

    
    // },
    // computer: {
    //     type: Boolean,
    //     default: false
    // }
});


const Room = mongoose.model("Room", RoomScheme);
module.exports = Room;
