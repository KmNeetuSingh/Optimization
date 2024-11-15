const express = require("express");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movieroutes");

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/movieStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

// Routes
app.use("/movies", movieRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
