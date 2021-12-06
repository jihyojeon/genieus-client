import React from 'react'
import FeedbackForm from '../components/Feedback/FeedbackForm'
import TopBar from '../components/TopBar/TopBar'
import { useLocation } from 'react-router'
import { Text } from '@chakra-ui/layout'

const Feedback = () => {
  const location = useLocation()
  let helpRequest = location.state
  console.log(helpRequest)
  return (
    <>
      <TopBar heading="Feedback" />
      {helpRequest ? (
        <FeedbackForm helpRequest={helpRequest} />
      ) : (
        <Text>Help Request ID Not Found</Text>
      )}
    </>
  )
}

export default Feedback
