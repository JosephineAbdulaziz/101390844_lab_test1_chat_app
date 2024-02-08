const Rooms = require('../model/Rooms');
const express = require('express');
const app = express();

// Join room
app.post('/room', async (req, res) => {
    
    const room = new Rooms(req.body);
    
    try {
        console.log("We are in the try block");
        await user.save();
        console.log("room was joined successfully");
        res.send(user);
    } catch (err) {
        console.log("Error occurred:", err);
        res.status(500).send(err.message);
    }
});


//update
app.put('/room/join', async (req, res) => {
    try {
        
        const room = await Rooms.find({username : req.username});
        if (room){
            room.covid = req.covid
            room.food = req.food
            room.sport = req.sport
            room.planet = req.planet
            room.computer = req.computer
        }
        else{
            res.status(500).send({ status: false, message: "Invalid username" });

        }

    
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});


module.exports = app;
