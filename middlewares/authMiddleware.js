const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed: No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Authentication failed: Invalid token' });
      }

      req.userId = decoded.userId;
      next();
    });
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed: ' + error.message });
  }
};