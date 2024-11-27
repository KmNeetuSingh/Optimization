const express = require('express');
const { authMiddleware } = require('../middleware/auth.Middleware');
const { addToCart, viewCart, updateCartItem, removeFromCart } = require('../controllers/cartController');

const router = express.Router();

// Add item to cart
router.post('/add', authMiddleware, addToCart);

// View cart
router.get('/', authMiddleware, viewCart);

// Update cart item quantity
router.put('/update', authMiddleware, updateCartItem);

// Remove item from cart
router.delete('/remove', authMiddleware, removeFromCart);

module.exports = router;
