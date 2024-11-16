const express = require('express');
const Bus = require('../models/Bus');

const router = express.Router();

// Create a Bus
router.post('/', async (req, res) => {
  try {
    const bus = new Bus(req.body);
    await bus.save();
    res.status(201).json(bus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Buses
router.get('/', async (req, res) => {
  try {
    const buses = await Bus.find().populate(['operator', 'route', 'reservations']);
    res.status(200).json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a Bus
router.put('/:id', async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(bus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a Bus
router.delete('/:id', async (req, res) => {
  try {
    await Bus.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
