const { verifyToken } = require("../utils/jwtUtils");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  // Check if the token is provided and in the correct format
  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No valid token provided" });
  }

  const actualToken = token.replace("Bearer ", "");

  try {
    const decoded = verifyToken(actualToken);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Attach the decoded user data to the request object
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Authentication error:", error); // Log the error for debugging
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Role-based access control middleware
const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!roles.length) {
      return res.status(400).json({ message: "Roles are required for authorization" });
    }

    // Ensure user exists and has a valid role
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: You do not have permission to access this resource" });
    }

    next();
  };
};

module.exports = { authMiddleware, authorize };
