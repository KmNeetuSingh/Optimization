const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/userRoute")
const todoRoutes = require("./routes/todoRoutes")
const connectDb= require("./config/db")
require("dotenv").config();

app.use(express.json());

app.get("/health", (req, res) => {
    res.send("Hello World!")
})


app.use("/users", userRoutes);
app.use("/todo",todoRoutes);

app.listen (port,async() => {
    await connectDb();
    console.log(`Server is running:${port}`)
})