const express = require('express');
const bodyParser = require('body-parser');
const encryptDecryptRoutes = require('./routes/encrpytDecrpyt');
const hashVerifyRoutes = require('./routes/hashVerify');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/encryptDecrypt', encryptDecryptRoutes);
app.use('/hashVerify', hashVerifyRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
