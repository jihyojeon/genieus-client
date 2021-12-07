import React, { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  // useColorModeValue
} from '@chakra-ui/react'
import ChatLeftPane from '../components/Chat/LeftPane/ChatLeftPane'
import ChatRightPane from '../components/Chat/RightPane/ChatRightPane'
import TopBar from '../components/TopBar/TopBar'
import { useParams } from 'react-router-dom'
import { auth } from '../firebase'
import { useGetHRRequestByIdQuery } from '../redux/services/helpRequestService'

const Chat = () => {
  const [userId, setUserId] = useState<string | null>(null)
  const [sessionOpen, setSessionOpen] = useState(true)

  const { id } = useParams()
  const hrById = useGetHRRequestByIdQuery(id || 'notfound', { skip: !id })
  const helpRequest = hrById.isSuccess ? hrById.data : null

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      if (item) {
        setUserId(item.uid)
      }
    })
  }, [])
  if (!userId) return <Heading>Loading ...</Heading>
  const isTutor = userId === helpRequest?.tutor_id
  console.log(helpRequest)
  return (
    <>
      <TopBar heading={'Help Request Chat'} tutor={isTutor} />
      <Box p={'1rem'}>
        {helpRequest ? (
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
              />
            </Box>
          </Flex>
        ) : (
          <Text size="xl">
            No ongoing help request, please create/accept a new help request.
          </Text>
        )}
      </Box>
    </>
  )
}

export default Chat
