const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDb = require("./Config/db");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/auth.Middleware");
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")
dotenv.config();

const app = express();

app.use(express.json()); 
app.use("/auth", authRoutes);
app.use('/products', productRoutes);
app.use('/api/cart', cartRoutes);





app.listen(5000, async () => {
  await connectDb();
  console.log("Server running on port 5000");
});
