const express = require('express');
const app = express();
const Port = 3000;
const mongoDB = require('./Config/db')

app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.listen(Port, async() => {
    await mongoDB(),
    console.log("Server is running")
})