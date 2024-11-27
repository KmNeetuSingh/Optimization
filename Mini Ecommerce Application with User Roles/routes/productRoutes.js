const express = require('express');
const { authMiddleware, authorize} = require('../middleware/auth.Middleware');
const { createProduct, getAllProducts, updateProduct, deleteProduct } = require('../controllers/productControllers');

const router = express.Router();

// Routes for product management
router.post('/', authMiddleware, authorize(['seller']), createProduct); // Create a product
router.get('/', getAllProducts); // Get all product...
router.put('/:id', authMiddleware, authorize (['admin'],['seller']), updateProduct); // Update a product
router.delete('/:id',authMiddleware, authorize (['admin'],['seller']),deleteProduct); // Delete a product

module.exports = router;
