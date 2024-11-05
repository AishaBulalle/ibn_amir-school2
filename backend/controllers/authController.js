// controllers/authController.js
const User = require('../models/userModel');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Check password (you might want to hash and compare)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Successful login, send back user info or a token
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { loginUser };
