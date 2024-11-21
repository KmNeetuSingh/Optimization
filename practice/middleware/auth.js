const jwt = require('jsonwebtoken'); // Import JWT to verify the token

const auth = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from 'Authorization' header

    // If token is not provided
    if (!token) {
        return res.status(401).send("Please Login First");
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send("Invalid or expired token");
        }


        req.user = decoded;


        next();
    });
};

module.exports = auth;
