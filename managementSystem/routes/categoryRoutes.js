const express = require('express');
const Category = require('../model/category');
const router = express.Router();

// Create a category
router.post('/', async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).send(category);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;

