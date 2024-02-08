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
app.get('/message/:room', async (req, res) => {
    const { room } = req.params; // Extract the room parameter from the request URL
    
    try {
        // Find messages based on the room parameter
        const messages = await Message.find({ room });

        console.log("Messages found:", messages);
        res.json(messages); // Send the messages as JSON response
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ error: err.message }); // Send error response
    }
});




module.exports = app;
