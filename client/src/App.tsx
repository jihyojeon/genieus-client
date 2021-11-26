import React from 'react'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import StudentDashboard from './pages/StudentDashboard'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/student-dashboard" element={<StudentDashboard />}/>
      </Routes>
    </Router>
   
  )
}

export default App
