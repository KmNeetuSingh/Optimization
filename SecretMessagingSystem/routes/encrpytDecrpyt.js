const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const CryptoJS = require('crypto-js');

// Key and IV for built-in crypto module
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Encryption/Decryption using crypto module
const encryptMessage = (message) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(message, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return { encrypted, iv: iv.toString('hex') };
};

const decryptMessage = (encrypted, ivHex) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(ivHex, 'hex'));
  let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
};

// Encryption/Decryption using CryptoJS
const encryptWithExternal = (message) => CryptoJS.AES.encrypt(message, 'secret').toString();
const decryptWithExternal = (encrypted) =>
  CryptoJS.AES.decrypt(encrypted, 'secret').toString(CryptoJS.enc.Utf8);

// Routes
router.get('/encrypt1/:message', (req, res) => {
  const result = encryptMessage(req.params.message);
  res.json(result);
});

router.get('/decrypt1', (req, res) => {
  const { encrypted, iv } = req.body;
  try {
    const result = decryptMessage(encrypted, iv);
    res.json({ decrypted: result });
  } catch (err) {
    res.status(400).json({ error: 'Decryption failed!' });
  }
});

router.get('/encrypt2/:message', (req, res) => {
  const result = encryptWithExternal(req.params.message);
  res.json({ encrypted: result });
});

router.get('/decrypt2', (req, res) => {
  const { encrypted } = req.body;
  try {
    const result = decryptWithExternal(encrypted);
    res.json({ decrypted: result });
  } catch (err) {
    res.status(400).json({ error: 'Decryption failed!' });
  }
});

module.exports = router;
