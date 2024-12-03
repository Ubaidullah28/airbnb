const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key';  // Make sure this is the same secret used for signing JWTs

const authMiddleware = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;  // Attach user info to the request object
    next();  // Proceed to the next middleware/route handler
  } catch (error) {
    res.status(400).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;
