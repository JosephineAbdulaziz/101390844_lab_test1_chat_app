const express = require('express')
const socketIo = require('socket.io')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoutes')
const messageRoute = require('./routes/messageRoutes')
const roomRoute = require('./routes/roomRoutes')
const cors = require('cors')
const Message = require('./model/Message')
const Room = require("./model/Rooms")

//Database Connection
const DB_HOST = "cluster0.iuldthm.mongodb.net"
const DB_USER = "rootadmin"
const DB_PASSWORD = "root"
const DB_NAME = "3133_lab_test"
const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Success Mongodb connection')
}).catch(err => {
    console.log('Error Mongodb connection')
});


//App setup
const SERVER_PORT = process.env.PORT || 5000;
const app = express()
app.use(cors())
app.use(express.json())
app.use(userRoute);
app.use(messageRoute)
app.use(roomRoute)


//Starting the server 
const myServer = app.listen(SERVER_PORT, () => { console.log('Server is running...') });

//socket setup
const ioServer = socketIo(myServer, {
    cors: '*'
})

ioServer.on("connection", socket => {
    console.log("user is connected" + socket.id)
    


    socket.on("join room", (room_name, username) => {
        socket.join(room_name)
        const room = new Room({
            username: username,
            room: room_name
        })
        room.save()
    })

    socket.on("send message", (messageData) => {
        const newMessage = new Message({
            from: messageData.from,
            room: messageData.room,
            message: messageData.message
        })
        console.log(messageData)
    
        newMessage.save()
            .then(savedMessage => {
                ioServer.to(newMessage.room).emit("recieve message", messageData)
            })
            .catch(error => {
                console.error('Error saving message:', error)
            })
    })
    socket.on("disconnect" , () => {
        console.log(`User connected: ${socket.id}`);
    })
    
})

