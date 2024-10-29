const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send("Welcome to the Express.js Server!");
});


app.get('/about', (req, res) => {
  res.send("This is a simple web server built using Express.js.");
});

app.get('/contact', (req, res) => {
  res.json({
    email: "student@example.com",
    phone: "123-456-7890"
  });
});

// Random Number Route
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.send(`Random Number: ${randomNumber}`);
});

// 404 Route
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
