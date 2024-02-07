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

module.exports = app;
