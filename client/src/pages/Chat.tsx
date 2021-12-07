import React, { useState, useEffect } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import ChatLeftPane from '../components/Chat/LeftPane/ChatLeftPane'
import ChatRightPane from '../components/Chat/RightPane/ChatRightPane'
import TopBar from '../components/TopBar/TopBar'
import { useParams } from 'react-router-dom'
import { auth } from '../firebase'
import HRType, {
  useGetHRRequestByIdQuery,
} from '../redux/services/helpRequestService'

const Chat = () => {
  const [userId, setUserId] = useState<string | null>(null)
  const [sessionOpen, setSessionOpen] = useState(true)
  const { id } = useParams()
  const helpRequestRes = useGetHRRequestByIdQuery(id || 'not-found')
  const [helpRequest, setHelpRequest] = useState<HRType | undefined>(
    helpRequestRes.data
  )
  console.log(helpRequest)
  // useEffect(() => {
  //   if (helpRequestRes.isSuccess) {
  //     setHelpRequest(helpRequestRes.data)
  //   }
  // }, [helpRequestRes])

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      if (item) {
        setUserId(item.uid)
      }
    })
  }, [])
  if (!userId) return <Heading>Loading ...</Heading>

  const isTutor = userId === helpRequest?.tutor_id
  const participantName = isTutor
    ? helpRequest?.student.name
    : helpRequest?.tutor.name

  if (helpRequest) {
    if (!helpRequest.tutor) return <Text>Loading ...</Text>
    return (
      <>
        <TopBar heading={'Help Request Chat'} tutor={isTutor} />
        <Box p={'1rem'}>
          <Flex w={'100%'}>
            <ChatLeftPane
              setSessionOpen={setSessionOpen}
              helpRequest={helpRequest}
              userId={userId}
              isTutor={isTutor}
            />
            <Box flexGrow={1} maxW="90ch" margin="auto">
              <ChatRightPane
                helpRequest={helpRequest}
                sessionOpen={sessionOpen}
                participantName={
                  participantName || isTutor ? 'Student' : 'Tutor'
                }
              />
            </Box>
          </Flex>
        </Box>
      </>
    )
  } else {
    return (
      <Text size="xl">
        No ongoing help request, please create/accept a new help request.
      </Text>
    )
  }
}

export default Chat
