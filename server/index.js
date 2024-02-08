const express = require('express')
const socketIo = require('socket.io')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoutes')
const messageRoute = require('./routes/messageRoutes')
const cors = require('cors')

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
app.use(express.static('views'))
app.use(userRoute);
app.use(messageRoute)


//Starting the server 
const myServer = app.listen(SERVER_PORT, () => { console.log('Server is running...') });

//socket setup
const ioServer = socketIo(myServer)

ioServer.on("connection", socket => {
    socket.on('join', (username))
    console.log(socket.id)
})

