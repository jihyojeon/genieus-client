import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import StudentDashboard from './pages/StudentDashboard'
import TutorDashboard from './pages/TutorDashboard'
import TutorHR from './pages/TutorHR'
import Feedback from './pages/Feedback'
import StudentHR from './pages/StudentHR'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/tutor-dashboard" element={<TutorDashboard />} />
        <Route path="/student-hr" element={<StudentHR />} />
        <Route path="/tutor-hr" element={<TutorHR />} />
        <Route path="/student-feedback" element={<Feedback />} />
      </Routes>
    </Router>
  )
}

export default App
