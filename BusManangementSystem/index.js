const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Import Routes
const operatorRoutes = require('./routes/operatorRoutes');
const routeRoutes = require('./routes/routeRoutes');
const busRoutes = require('./routes/busRoutes');
const passengerRoutes = require('./routes/passengerRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

// Use Routes
app.use('/operators', operatorRoutes);
app.use('/routes', routeRoutes);
app.use('/buses', busRoutes);
app.use('/passengers', passengerRoutes);
app.use('/reservations', reservationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
