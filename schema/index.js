const express = require("express");
const app = express();
const Port = 3000;
const mongodb = require("./config/db")
const productRoutes = require("./route/productroute");
app.use(express.json());
app.use('api/products', productRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!")
});


app.listen(Port, async () => {
    await mongodb()
    console.log("Server is running")
})