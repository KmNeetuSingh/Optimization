const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/userRoute")
const connectDb= require("./config/db")
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!")
})


app.use("/users", userRoutes);

app.listen (port,async() => {
    await connectDb();
    console.log(`Server is running:${port}`)
})