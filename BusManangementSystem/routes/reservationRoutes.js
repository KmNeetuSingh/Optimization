const express = require('express');
const Reservation = require('../models/Reservation');

const router = express.Router();

// Create a Reservation
router.post('/', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json(reservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Reservations
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find().populate(['bus', 'passenger']);
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a Reservation
router.put('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(reservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a Reservation
router.delete('/:id', async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
