import React from 'react'
import FeedbackForm from '../components/Feedback/FeedbackForm'
import TopBar from '../components/TopBar/TopBar'
import { useParams } from 'react-router'
import { Box, Text, Link } from '@chakra-ui/react'
import { useGetHRRequestByIdQuery } from '../redux/services/helpRequestService'
import { Link as RouterLink } from 'react-router-dom'

const Feedback = () => {
  const { id } = useParams()
  const hrById = useGetHRRequestByIdQuery(id || 'notfound', { skip: !id })
  const helpRequest = hrById.isSuccess ? hrById.data : null

  if (helpRequest) {
    if (helpRequest.rating) {
      return (
        <Box>
          <Text>This help request already has a rating</Text>
          <Link as={RouterLink} to="/student-dashboard/">
            Go back
          </Link>
        </Box>
      )
    }
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
  } else {
    return <Text>Loading ...</Text>
  }
}

export default Feedback
