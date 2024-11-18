const book = require("../models/bookModel");
exports.addBooks = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    }
    catch (error) {
        res.status(400).json({ error: error.message });

    }
};