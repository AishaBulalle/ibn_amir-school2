require('dotenv').config({ path: '.env.local' });
//require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://witty-grass-01616631e.5.azurestaticapps.net',
    ],
    credentials: true,
  })
);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Ibn Amir School API!');
});

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);
app.use('/auth', authRoutes);

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running on port 5001');
});
