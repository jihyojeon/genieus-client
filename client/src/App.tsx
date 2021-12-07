import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Chat from './pages/Chat'
import Feedback from './pages/Feedback'
import LandingPage from './pages/LandingPage'
import StudentDashboard from './pages/StudentDashboard'
import StudentHR from './pages/StudentHR'
import TutorClose from './pages/TutorClose'
import TutorDashboard from './pages/TutorDashboard'
import TutorHR from './pages/TutorHR'
import PreviousHelpRequest from './pages/PreviousHR'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/tutor-dashboard" element={<TutorDashboard />} />
        <Route path="/student-hr" element={<StudentHR />} />
        <Route path="/tutor-hr" element={<TutorHR />} />
        <Route path="/previous-hr" element={<PreviousHelpRequest />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/student-feedback/:id" element={<Feedback />} />
        <Route path="/tutor-complete" element={<TutorClose />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
