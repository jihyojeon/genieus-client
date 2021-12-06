import React, { useState, useEffect } from 'react'
import { auth } from '../../../firebase'
import { useGetStudentByIdQuery } from '../../../redux/services/studentService'
import { useGetTutorByIdQuery } from '../../../redux/services/tutorService'

import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import ChatParticipant from './ChatParticipant'
import ChatDuration from './ChatDuration'
import ChatAction from './ChatAction'

const ChatLeftPane = (props: any) => {
  //  >-------------- user id logic
  // TODO: REMOVE TEST "1234" VALUE BELOW AND UNCOMMENT SUBSEQUENT USESTATE
  const [userId, setUserId] = useState('1234')
  // const [userId, setUserId] = useState()
  const student = useGetStudentByIdQuery(userId)
  const tutor = useGetTutorByIdQuery(userId)

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])
  //  >--------------

  //  >-------------- populate component with user data

  const bio: string = 'dummy bio'

  // MASTER VALUE FOR INITIAL CHAT DURATION IS SET BELOW
  const minutes: number = 2 // MAX LENGTH OF CHAT BEFORE ACCEPT/DECLINE IN MINUTES
  const seconds: number = minutes * 60 // MAX LENGTH OF CHAT BEFORE ACCEPT/DECLINE

  // TIMER WILL SWITCH TO TIME REMAINING ON SUBSCRIPTION AFTER INITIAL TIMER EXPIRES
  const subscriptionRemainingMins: number = 35
  const subscriptionRemainingSecs: number =
    subscriptionRemainingMins * 60 - seconds

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
      photo_url: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
  }

  const [isTutor, setIsTutor] = useState(true) // TODO: obtain logged in user type from user ID? GET /tutor:id
  const [studentData, setStudentData] = useState() //GET /student:id
  const [tutorData, setTutorData] = useState() //GET /student:id
  const [subscription, setSubscription] = useState() //GET /subscription
  const id: string = isTutor
    ? mockHelpRequest.student.id
    : mockHelpRequest.tutor.id
  const name: string = isTutor
    ? mockHelpRequest.student.name
    : mockHelpRequest.tutor.name
  const photo_url: string = isTutor
    ? mockHelpRequest.student.photo_url
    : mockHelpRequest.tutor.photo_url

  //   --------------<

  //  >-------------- conditionally renders a "Decline" component based on canDecline state set in chatDuration component (on initial countdown clock ending)
  const [canDecline, setCanDecline] = useState(true)

  const declineBox = () => {
    return (
      <Box marginBottom={'1rem'}>
        <ChatAction
          action={'decline'}
          name={name}
          photo_url={photo_url}
          seconds={seconds}
          grow={1}
          canDecline={canDecline}
        />
      </Box>
    )
  }

  // --------------<

  return (
    <Flex direction="column" maxW="30rem" justify="stretch">
      <Flex
        direction="column"
        alignItems="center"
        textAlign="center"
        justify="stretch"
        height="80vh"
        padding="0.5rem"
        paddingLeft="1.5rem"
        paddingBottom="1rem"
        // TODO: MAKE THIS SCROLLBAR STYLE GLOBAL?
        overflowY={'scroll'}
        sx={{
          '&::-webkit-scrollbar': {
            backgroundColor: `rgba(150, 150, 190, 0.15)`,
            borderRadius: '8px',
            backgroundClip: 'padding-box',
            width: '16px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `rgba(160, 160, 230, 0.45)`,
            borderRadius: '8px',
            width: '16px',
          },
        }}
      >
        {/* PROFILE COMPONENT */}
        {/* TODO: ADD ON HOVER TO HIGHLIGHT CLICKABILITY FOR MODALBIO POPUP */}
        <ChatParticipant
          name={name}
          photo_url={photo_url}
          hr={mockHelpRequest}
          bio={bio}
        />

        {/* CLOCK COUNTER COMPONENT */}
        <ChatDuration seconds={seconds} setCanDecline={setCanDecline} />

        {/* DECLINE COMPONENT */}
        {canDecline && declineBox()}

        {/* ZOOM COMPONENT */}
        <ChatAction
          action={'zoom'}
          name={name}
          photo_url={photo_url}
          seconds={seconds}
          zoom_url={mockHelpRequest.zoom_url}
          grow={1}
        />

        {/* COMPLETE COMPONENT */}
        <ChatAction
          action={'complete'}
          name={name}
          photo_url={photo_url}
          seconds={seconds}
          zoomUrl={mockHelpRequest.zoom_url}
          grow={1}
        />
      </Flex>
    </Flex>
  )
}

export default ChatLeftPane
