// server.js
require('dotenv').config({ path: '.env.local' });
//require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db'); // Import the db connection
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const authRoutes = require('./routes/authRoutes'); // Import the auth routes

const app = express();
//const PORT = process.env.PORT || 8080;

// Middleware
//app.use(cors());
//app.use(
//cors({ 'http://localhost:5173',
// origin: 'https://witty-grass-01616631e.5.azurestaticapps.net', // Frontend URL
// credentials: true, // Allow cookies or authentication headers
//})
//);

app.use(
  cors({
    origin: [
      'http://localhost:5173', // Local development URL
      'https://witty-grass-01616631e.5.azurestaticapps.net', // Deployed frontend URL
    ],
    credentials: true, // Allow cookies or authentication headers
  })
);

app.use(bodyParser.json());

// Add a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Ibn Amir School API!');
});

// Use routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);
app.use('/auth', authRoutes); // This line makes your login endpoint available at /auth/login

// Start the server
//app.listen(PORT, () => {
// console.log(`Server running on port ${PORT}`);
//});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running on port 5001');
});
