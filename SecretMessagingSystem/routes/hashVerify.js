const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const bcrypt = require('bcrypt');

// Hashing with crypto module
const hashMessage = (message) => crypto.createHash('sha256').update(message).digest('hex');
const verifyHash = (message, hash) => hashMessage(message) === hash;

// Hashing with bcrypt
const hashWithExternal = async (message) => await bcrypt.hash(message, 10);
const verifyWithExternal = async (message, hash) => await bcrypt.compare(message, hash);

// Routes
router.get('/hash1/:message', (req, res) => {
  const hash = hashMessage(req.params.message);
  res.json({ hash });
});

router.post('/retrieve1', (req, res) => {
  const { message, hash } = req.body;
  const isValid = verifyHash(message, hash);
  res.json({ match: isValid });
});

router.get('/hash2/:message', async (req, res) => {
  try {
    const hash = await hashWithExternal(req.params.message);
    res.json({ hash });
  } catch (err) {
    res.status(500).json({ error: 'Hashing failed!' });
  }
});

router.post('/retrieve2', async (req, res) => {
  const { message, hash } = req.body;
  try {
    const isValid = await verifyWithExternal(message, hash);
    res.json({ match: isValid });
  } catch (err) {
    res.status(500).json({ error: 'Verification failed!' });
  }
});

module.exports = router;
