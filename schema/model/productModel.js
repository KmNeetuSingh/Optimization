const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Product name is required'],
    maxlength: [50, 'Product name must not exceed 50 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: ['Electronics', 'Clothing', 'Books', 'Home Appliances'],
      message: 'Invalid category',
    },
  },
  stock: {
    type: Number,
    required: [true, 'Stock is required'],
    min: [0, 'Stock cannot be negative'],
    validate: {
      validator: Number.isInteger,
      message: 'Stock must be an integer',
    },
  },
  SKU: {
    type: String,
    required: [true, 'SKU is required'],
    unique: true,
    match: [/^PROD-\w{4}$/, 'SKU must follow the format PROD-XXXX'],
  },
  tags: {
    type: [String],
    validate: {
      validator: function (tags) {
        const uniqueTags = new Set(tags);
        return tags.every(tag => /^[A-Za-z0-9]+$/.test(tag)) && uniqueTags.size === tags.length;
      },
      message: 'Tags must be unique, non-empty, and contain no special characters',
    },
  },
});

module.exports = mongoose.model('Product', productSchema);
