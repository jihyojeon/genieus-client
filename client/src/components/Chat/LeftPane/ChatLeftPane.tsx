import React, { useState, useEffect } from 'react'
import { auth } from '../../../firebase'
import { Heading } from '@chakra-ui/layout'
import { useGetStudentByIdQuery } from '../../../redux/services/studentService'
import { useGetTutorByIdQuery } from '../../../redux/services/tutorService'

import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'

import ChatParticipant from './ChatParticipant'
import ChatDuration from './ChatDuration'
import ChatAction from './ChatAction'

type ChatLeftPaneProps = {
  helpRequest: any
  userId: string
  isTutor: boolean
}

const ChatLeftPane = ({ helpRequest, userId, isTutor }: ChatLeftPaneProps) => {
  const [canDecline, setCanDecline] = useState(true)

  const studentQuery = useGetStudentByIdQuery(helpRequest.student_id)

  // TODO: replace this with better error handling
  // if (!(tutorQuery.isSuccess && studentQuery.isSuccess)) {
  //   return <Heading>Loading ...</Heading>
  // }

  const student = studentQuery.data

  // MAX LENGTH OF CHAT BEFORE ACCEPT/DECLINE
  const initialTime: number = 30000

  // TIMER WILL SWITCH TO TIME REMAINING ON SUBSCRIPTION AFTER INITIAL TIMER EXPIRES
  const subscriptionRemainingSecs: number = student?.time_remaining || 9999

  return (
    <Flex
      direction="column"
      alignItems="center"
      textAlign="center"
      justify="stretch"
      height="80vh"
      maxW="30rem"
      paddingTop="0.5rem"
      paddingLeft="1.5rem"
      paddingRight="1.5rem"
      paddingBottom="1rem"
      overflowY={'auto'}
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
      <ChatParticipant hr={helpRequest} isTutor={isTutor} />
      {!isTutor && (
        <ChatDuration
          seconds={initialTime}
          subscriptionRemainingSecs={subscriptionRemainingSecs}
          setCanDecline={setCanDecline}
        />
      )}
      {canDecline && (
        <Box marginBottom={'1rem'}>
          <ChatAction
            action={'decline'}
            seconds={initialTime}
            grow={1}
            canDecline={true}
          />
        </Box>
      )}
      <ChatAction
        action={'zoom'}
        seconds={initialTime}
        zoom_url={helpRequest.zoom_url}
        grow={1}
      />
      <ChatAction
        action={'complete'}
        seconds={initialTime}
        zoomUrl={helpRequest.zoom_url}
        grow={1}
      />
    </Flex>
  )
}

export default ChatLeftPane
