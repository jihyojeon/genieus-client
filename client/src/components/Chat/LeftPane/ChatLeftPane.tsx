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
  const name: string = 'Vic' // PROVIDES NAME OF OTHER PARTY
  const imageUrl: string = 'https://bit.ly/dan-abramov' // PROVIDES MUG SHOT OF OTHER PARTY
  const zoomUrl =
  'https://zoom.us/j/91414924610?pwd=RHk3ZGxVMDlPY2lvMlU4R3RnSk1ZUT09' // ZOOM URL (COPIED TO CLIPBOARD AND USED IN BUTTON)
  
  // MASTER VALUE FOR INITIAL CHAT DURATION IS SET BELOW
  const minutes: number = 2 // MAX LENGTH OF CHAT BEFORE ACCEPT/DECLINE IN MINUTES
  const seconds: number = minutes * 60 // MAX LENGTH OF CHAT BEFORE ACCEPT/DECLINE
  
  // TIMER WILL SWITCH TO TIME REMAINING ON SUBSCRIPTION AFTER INITIAL TIMER EXPIRES
  const subscriptionRemainingMins: number = 35
  const subscriptionRemainingSecs: number =
  subscriptionRemainingMins * 60 - seconds
  //   --------------<


  //  >-------------- conditionally renders a "Decline" component based on canDecline state set in chatDuration component (on initial countdown clock ending) 
  const [canDecline, setCanDecline] = useState(true)

  const declineBox = () => {
    return (
      <Box marginBottom={'1rem'}>
        <ChatAction
          action={'decline'}
          name={name}
          imageUrl={imageUrl}
          seconds={seconds}
          zoomUrl={zoomUrl}
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
        <ChatParticipant name={name} imageUrl={imageUrl} />

        {/* CLOCK COUNTER COMPONENT */}
        <ChatDuration
          seconds={seconds}
          setCanDecline={setCanDecline}
        />

        {/* DECLINE COMPONENT */}
        {canDecline && declineBox()}

        {/* ZOOM COMPONENT */}
        <ChatAction
          action={'zoom'}
          name={name}
          imageUrl={imageUrl}
          seconds={seconds}
          zoomUrl={zoomUrl}
          grow={1}
        />

        {/* COMPLETE COMPONENT */}
        <ChatAction
          action={'complete'}
          name={name}
          imageUrl={imageUrl}
          seconds={seconds}
          zoomUrl={zoomUrl}
          grow={1}
        />
      </Flex>
    </Flex>
  )
}

export default ChatLeftPane
