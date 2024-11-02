// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import videoFile from '../assets/ibnamir-video.mp4'; // Import the video file

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Ibn Amer</h1>
        <Link to="/login" className="login-button">
          Login
        </Link>
      </header>

      <section className="homepage-section">
        <h2>Welcome to Ibn Amer School</h2>
        <p>
          Empowering students with knowledge, values, and skills for life. Ibn
          Amir School is dedicated to providing students with a balanced
          education that combines academic excellence and moral values.
        </p>
      </section>

      <section className="video-section">
        <video width="600" controls>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="courses-section">
        <h3>Courses Offered:</h3>
        <p>Quran Recitation</p>
        <p>Arabic Language</p>
        <p>Islamic Studies</p>
      </section>

      <footer className="footer">
        <h2>Contact Us</h2>
        <p>Email: teacher@example.com</p>
        <p>Phone: +123456789</p>
      </footer>
    </div>
  );
};

export default HomePage;
