import React, { useState, useEffect } from 'react'
import { auth } from '../../../firebase'
import { useGetStudentByIdQuery } from '../../../redux/services/studentService'
import { useGetTutorByIdQuery } from '../../../redux/services/tutorService'

import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import ChatParticipant from './ChatParticipant'
import ChatDuration from './ChatDuration'
import ChatAction from './ChatAction'

const ChatLeftPane = (props: any) => {
  // TODO: REMOVE TEST "1234" VALUE BELOW
  const [userId, setUserId] = useState("1234")
  const student = useGetStudentByIdQuery(userId)
  const tutor = useGetTutorByIdQuery(userId)

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])



  // PROPS FOR CHAT
  const participantsObj: any = {
    name: 'Vic', // PROVIDES NAME OF OTHER PARTY
    image: 'https://bit.ly/dan-abramov', // PROVIDES MUG SHOT OF OTHER PARTY
  }

  // TODO CHANGED FROM "2" TO "0.05" FOR QUICK TESTING
  const minutes: number = 2 // MAX LENGTH OF CHAT BEFORE ACCEPT/DECLINE IN MINUTES
  const seconds: number = minutes * 60 // MAX LENGTH OF CHAT BEFORE ACCEPT/DECLINE
  const name: string = participantsObj.name // PROVIDES NAME OF OTHER PARTY
  const imageUrl: string = participantsObj.image // PROVIDES MUG SHOT OF OTHER PARTY
  const zoomUrl =
    'https://zoom.us/j/91414924610?pwd=RHk3ZGxVMDlPY2lvMlU4R3RnSk1ZUT09' // ZOOM URL (COPIED TO CLIPBOARD AND USED IN BUTTON)

  // TIMER WILL SWITCH TO TIME REMAINING ON SUBSCRIPTION AFTER INITIAL TIMER EXPIRES
  const subscriptionRemainingMins: number = 35
  const subscriptionRemainingSecs: number =
    subscriptionRemainingMins * 60 - seconds

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
        // TODO: ADD SCROLLBAR TO GLOBAL STYLE?
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
        <Box
          alignItems="center"
          bg={useColorModeValue('gray.100', 'gray.700')}
          borderRadius="1rem"
          direction="column"
          padding="1rem"
          marginTop={'1rem'}
          height="100%"
          width="100%"
          justifyContent="space-between"
        >
          <ChatParticipant
            name={name}
            imageUrl={imageUrl}
          />
        </Box>
        <Box
          alignItems="center"
          bg={useColorModeValue('gray.100', 'gray.700')}
          borderRadius="1rem"
          direction="column"
          padding="1rem"
          marginTop={'1rem'}
          height="100%"
          width="100%"
          justifyContent="space-between"
        >
          <ChatDuration
            seconds={seconds}
          />
        </Box>

        <ChatAction
          action={'decline'}
          name={name}
          imageUrl={imageUrl}
          seconds={seconds}
          zoomUrl={zoomUrl}
          grow={1}
        />
        <ChatAction
          action={'zoom'}
          name={name}
          imageUrl={imageUrl}
          seconds={seconds}
          zoomUrl={zoomUrl}
          grow={1}
        />
        <ChatAction
          action={'complete'}
          name={name}
          imageUrl={imageUrl}
          seconds={seconds}
          zoomUrl={zoomUrl}
          grow={1}
        />

        <ChatAction
          action={'test'}
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
