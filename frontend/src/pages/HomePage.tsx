// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import videoFile from '../assets/ibnamir-video.mp4'; // Import the video file
import quranImage from '../assets/quran.webp'; // Import Quran image
import arabicImage from '../assets/arabic.webp'; // Import Arabic image
import islamicStudiesImage from '../assets/islamic studies.webp'; // Import Islamic Studies image

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>🕌Ibn Amir</h1>
        <Link to="/login" className="login-button">
          Login
        </Link>
      </header>

      <section className="homepage-section">
        <h2>🕌Welcome to Ibn Amir🕌</h2>
        <p>
          Empowering students with knowledge, values, and skills for life. Ibn
          Amir school is dedicated to providing students with a balanced
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
        <h3>Courses</h3>
        <div className="course-container">
          <div className="course-box">
            <h4>Quran Recitation</h4>
            <div className="course-image">
              <img src={quranImage} alt="Quran Recitation" />
            </div>
            <p>
              Learn to recite the Quran with proper Tajweed and understanding.
            </p>
          </div>
          <div className="course-box">
            <h4>Arabic Language</h4>
            <div className="course-image">
              <img src={arabicImage} alt="Arabic Language" />
            </div>
            <p>Explore the beauty of the Arabic language and its structure.</p>
          </div>
          <div className="course-box">
            <h4>Islamic Studies</h4>
            <div className="course-image">
              <img src={islamicStudiesImage} alt="Islamic Studies" />
            </div>
            <p>Understand the principles and teachings of Islam.</p>
          </div>
        </div>
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
