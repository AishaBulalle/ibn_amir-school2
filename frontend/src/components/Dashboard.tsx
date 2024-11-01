import React, { useState } from 'react';
import StudentDashboard from './StudentDashboard';
import EnrollmentDashboard from './EnrollmentDashboard';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [viewMode, setViewMode] = useState<'students' | 'courses'>('students');

  return (
    <div className="dashboard-container">
      <h1>Teacher Dashboard</h1>

      <div className="filter-buttons">
        <button
          onClick={() => setViewMode('students')}
          className={viewMode === 'students' ? 'active' : ''}
        >
          Show Students
        </button>
        <button
          onClick={() => setViewMode('courses')}
          className={viewMode === 'courses' ? 'active' : ''}
        >
          Show Courses
        </button>
      </div>

      {viewMode === 'students' ? <StudentDashboard /> : <EnrollmentDashboard />}
    </div>
  );
};

export default Dashboard;
