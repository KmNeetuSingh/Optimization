const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb+srv://neetusingh99590:uE2D4dtqwmc3pArj@cluster0.alpks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

// Root route
app.get("/", (req, res) => {
  res.send("Server is running on the root path!");
});

// Routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
