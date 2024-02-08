const User = require('../model/User');
const express = require('express');
const app = express();

// Adding a user
app.post('/user', async (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    
    try {
        console.log("We are in the try block");
        await user.save();
        console.log("User saved successfully");
        res.send(user);
    } catch (err) {
        console.log("Error occurred:", err);
        res.status(500).send(err.message);
    }
});


//Login
app.post('/user/login', async (req, res) => {
    try {
        
        const user = await User.find({username : req.username});

        if (user) {
            if (user.password === req.password) {
                res.status(200).send({ status: true, username: user.username, message: "User logged in successfully" });
            } else {
                res.status(500).send({ status: false, message: "Invalid username and password" });
            }
        } else {
            console.log("user does not exist")
            res.status(500).send({ status: false, message: "Invalid username and password" });
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});


module.exports = app;
