const Message = require('../model/Message')
const express = require('express')
const app = express()

app.post('/message', async (req, res) => {
    console.log(req.body);
    const message = new Message(req.body);
    
    try {
        console.log("We are in the try block");
        await message.save();
        console.log("message saved successfully");
        res.send(message);
    } catch (err) {
        console.log("Error occurred:", err);
        res.status(500).send(err.message);
    }
});

module.exports = app;
