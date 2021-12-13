import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import TopBar from '../components/TopBar/TopBar'
import HrContent from '../components/TutorHR/HrContent'
import StudentReady from '../components/TutorHR/StudentReady'
import { useLocation } from 'react-router'

const TutorHelpRequest = () => {
  const [studentReady, setStudentReady] = useState(false)
  const location = useLocation()

  return (
    <Box>
      {/* @ts-ignore */}
      <TopBar
        heading={`${location.state.student.name}'s Help Request`}
        tutor={true}
      />
      <HrContent hrData={location.state} setStudentReady={setStudentReady} />
      {studentReady && (
        <Box mt={10} p={0}>
          <StudentReady />
        </Box>
      )}
    </Box>
  )
}

export default TutorHelpRequest
