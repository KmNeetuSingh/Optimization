const Author = require('../models/authorModel');
exports.addAuthor = async (req, res) => {
    try {
        const author = newAuthor(req.body);
        await author.save();
        res.status(201).json(author);


    } catch (error) {
        res.status(400).json({ error: message });

    }
};
