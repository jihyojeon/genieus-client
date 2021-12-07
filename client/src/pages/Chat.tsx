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
  const { id } = useParams()
  const hrById = useGetHRRequestByIdQuery(id || 'notfound')
  const helpRequest = hrById.isSuccess ? hrById.data : null

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      if (item) {
        console.log(userId)
        setUserId(item.uid)
      }
    })
  }, [])
  if (!userId) return <Heading>Loading ...</Heading>
  const isTutor = userId === helpRequest?.tutor_id
  return (
    <>
      <TopBar heading={'Chat'} tutor={isTutor} />
      <Box p={'1rem'}>
        {helpRequest ? (
          <Flex w={'100%'}>
            <ChatLeftPane
              helpRequest={helpRequest}
              userId={userId}
              isTutor={isTutor}
            />
            <Box flexGrow={1} maxW="90ch" margin="auto">
              <ChatRightPane helpRequest={helpRequest} />
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

// TODO: FIXES REQUIRED:
// TODO: 1. REFRESHING PAGE RESETS COUNTDOWN TIMER
// TODO: DISPLAY WARNING IF ATTEMPTING TO CLOSE THIS WINDOW - ATTEMPT AT THIS IS COMMENTED OUT ABOVE AND BELOW?
// TODO: 2. REFACTOR PROP-DRILLING (START IN CHAT PAGE?)
// import { useBeforeunload } from 'react-beforeunload'

// useBeforeunload(
//   () =>
//     'Closing this tab will not allow you to mark the session as complete and will cause excessive billing.  Are you sure you wish to close this tab? '
// )

// CODE TO WARN AGAINST CLOSING THE CHAT WINDOW
// window.addEventListener("beforeunload", (ev) =>
// {
//     ev.preventDefault();
//     return ev.returnValue = 'Are you sure you want to close?';
// });
// componentDidMount: function() {
//   window.addEventListener('onbeforeunload', this.handleWindowClose);
// },

// componentWillUnmount: function() {
//   window.removeEventListener('onbeforeunload', this.handleWindowClose);
// }
// // ----
