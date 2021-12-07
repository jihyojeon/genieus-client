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
import { useLocation } from 'react-router-dom'
import { auth } from '../firebase'

const mockHelpRequest = {
  id: '73668645-b761-4ae2-ac96-e1a52dde2ac8',
  status: 'closed-compelted',
  description: 'this is a description',
  time_opened: '2021-12-02T15:53:37.806Z',
  time_accepted: '2021-12-02T15:53:37.806Z',
  time_closed: '2021-12-02T15:53:37.806Z',
  rating: null,
  feedback_comments: null,
  tags: null,
  language: 'fortran',
  code: 'this is some code',
  zoom_url:
    'https://zoom.us/j/91414924610?pwd=RHk3ZGxVMDlPY2lvMlU4R3RnSk1ZUT09',
  call_length: 211,
  favourites_only: false,
  tutor_id: 'sIOHhUgNX8PNU0eDXHAKM2Lnpz43',
  student_id: 'spammyboi23',
  interested_tutors: ['sIOHhUgNX8PNU0eDXHAKM2Lnpz43'],
  declined_tutors: null,
  createdAt: '2021-12-02T15:53:37.806Z',
  updatedAt: '2021-12-02T15:53:37.806Z',
  student: {
    id: 'spammyboi23',
    name: 'Student Name',
    photo_url: 'https://bit.ly/dan-abramov',
  },
  tutor: {
    id: 'sIOHhUgNX8PNU0eDXHAKM2Lnpz43',
    name: 'Tutor Name',
    photo_url: 'https://randomuser.me/api/portraits/men/74.jpg',
  },
}

const Chat = () => {
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      if (item) {
        console.log(userId)
        setUserId(item.uid)
      }
    })
  }, [])

  const location = useLocation()
  const helpRequest: any = location.state
  console.log(helpRequest)
  const isTutor = userId === helpRequest?.tutor_id
  if (!userId) return <Heading>Loading ...</Heading>
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
