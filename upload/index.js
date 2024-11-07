const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;

dotenv.config();

const app = express();
const port = 4000;

// Set up Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up Multer for file uploads
const upload = multer({ dest: path.join(__dirname, 'uploads') });

// Serve HTML form at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle file upload and send to Cloudinary
app.post('/upload', upload.single('file'), (req, res) => {
  const filePath = req.file.path;

  // Upload file to Cloudinary
  cloudinary.uploader.upload(filePath, (error, result) => {
    if (error) {
      return res.status(500).json({ message: 'Upload failed', error });
    }
    // Send the Cloudinary URL as response
    res.status(200).json({ message: 'File uploaded successfully', imageUrl: result.secure_url });

    // Clean up the file from local storage
    fs.unlinkSync(filePath);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
