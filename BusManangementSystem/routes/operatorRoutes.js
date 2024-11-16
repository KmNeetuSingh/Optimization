const express = require('express');
const Operator = require('../models/Operator'); 

const router = express.Router();

// Create an Operator
router.post('/', async (req, res) => {
  try {
    const operator = new Operator(req.body);
    await operator.save();
    res.status(201).json(operator);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Operators
router.get('/', async (req, res) => {
  try {
    const operators = await Operator.find().populate('buses'); // Populate buses field if needed
    res.status(200).json(operators);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific Operator by ID
router.get('/:id', async (req, res) => {
  try {
    const operator = await Operator.findById(req.params.id).populate('buses');
    if (!operator) {
      return res.status(404).json({ error: 'Operator not found' });
    }
    res.status(200).json(operator);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an Operator
router.put('/:id', async (req, res) => {
  try {
    const operator = await Operator.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!operator) {
      return res.status(404).json({ error: 'Operator not found' });
    }
    res.status(200).json(operator);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an Operator
router.delete('/:id', async (req, res) => {
  try {
    const operator = await Operator.findByIdAndDelete(req.params.id);
    if (!operator) {
      return res.status(404).json({ error: 'Operator not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
