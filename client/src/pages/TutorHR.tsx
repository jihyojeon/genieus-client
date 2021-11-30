import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import TopBar from '../components/TutorHR/TopBar'
import HrContent from '../components/TutorHR/HrContent'
import StudentReady from '../components/TutorHR/StudentReady'

const TutorHelpRequest = () => {
  const [studentReady, setStudentReady] = useState(false)

  return (
    <Box>
      <TopBar />
      <HrContent setStudentReady={setStudentReady} />
      {studentReady && (
        <Box mt={10} p={0}>
          <StudentReady />
        </Box>
      )}
    </Box>
  )
}

export default TutorHelpRequest
