const express = require('express');
const Passenger = require('../models/Passenger');

const router = express.Router();

// Create a Passenger
router.post('/', async (req, res) => {
  try {
    const passenger = new Passenger(req.body);
    await passenger.save();
    res.status(201).json(passenger);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Passengers
router.get('/', async (req, res) => {
  try {
    const passengers = await Passenger.find().populate('reservations');
    res.status(200).json(passengers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a Passenger
router.put('/:id', async (req, res) => {
  try {
    const passenger = await Passenger.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(passenger);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a Passenger
router.delete('/:id', async (req, res) => {
  try {
    await Passenger.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
