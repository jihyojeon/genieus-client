import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import StudentDashboard from './pages/StudentDashboard'
import TutorDashboard from './pages/TutorDashboard'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                    path="/student-dashboard"
                    element={<StudentDashboard />}
                />
                <Route path="/tutor-dashboard" element={<TutorDashboard />} />
            </Routes>
        </Router>
    )
}

export default App
