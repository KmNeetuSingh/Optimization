const express = require('express');
const Product = require('../model/product');
const router = express.Router();

// Create a product
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get all products with category name
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('category', 'name');
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
