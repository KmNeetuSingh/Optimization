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
    const operators = await Operator.find().populate('buses');
    res.status(200).json(operators);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an Operator
router.put('/:id', async (req, res) => {
  try {
    const operator = await Operator.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(operator);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an Operator
router.delete('/:id', async (req, res) => {
  try {
    await Operator.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
