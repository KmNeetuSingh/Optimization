const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my Server');
});

app.get('/about', (req, res) => {
    res.send("It is the product page where you can buy and add things");
});

app.get('/contact', (req, res) => {
    res.json({
        email: "neetu@gmail.com",
        phone: "1234567"
    });
});

// 404 Error handling middleware - should be placed last
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
