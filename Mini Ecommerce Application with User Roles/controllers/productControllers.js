const Product = require('../models/product');

exports.createProduct = async (req, res) => {
  try {
    if (req.user.role !== 'seller') {
      return res.status(403).json({ message: 'Only sellers can create products.' });
    }

    const { name, description, price, quantity } = req.body;

    const product = new Product({
      name,
      description,
      price,
      quantity,
      sellerId: req.user._id, // Add seller's ID from JWT
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('sellerId', 'email'); // Optional: populate seller info
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found.' });

    if (req.user.role !== 'admin' && req.user._id.toString() !== product.sellerId.toString()) {
      return res.status(403).json({ message: 'Unauthorized to update this product.' });
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found.' });

    if (req.user.role !== 'admin' && req.user._id.toString() !== product.sellerId.toString()) {
      return res.status(403).json({ message: 'Unauthorized to delete this product.' });
    }

    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
};
