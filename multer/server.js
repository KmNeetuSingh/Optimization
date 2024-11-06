const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 4000;

// Ensure 'src' directory exists
const logDir = path.join(__dirname, 'src');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Set up the file stream for logging
const logStream = fs.createWriteStream(path.join(logDir, 'access.log'), { flags: 'a' });

// Configure Morgan middleware to log detailed information
app.use(morgan(':method :status :res[content-length] - :response-time ms :date[clf] :http-version :url', { stream: logStream }));

// Define routes as specified
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Express server!');
});

app.get('/get-users', (req, res) => {
  res.status(200).json({ message: 'User list retrieved successfully' });
});

app.post('/add-user', (req, res) => {
  res.status(201).send('User added successfully');
});

app.put('/user/:id', (req, res) => {
  res.status(201).send(`User with ID ${req.params.id} updated successfully`);
});

app.delete('/user/:id', (req, res) => {
  res.send(`User with ID ${req.params.id} deleted successfully`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
