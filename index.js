const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoutes')
const messageRoute = require('./routes/messageRoutes')


const app = express()
app.use(express.json())

// const connectionString = 'mongodb+srv://rootadmin:root@cluster0.iuldthm.mongodb.net/3133_lab_test'

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
  
  app.use(userRoute);
  app.use(messageRoute)
  
  app.listen(8081, () => { console.log('Server is running...') });
  