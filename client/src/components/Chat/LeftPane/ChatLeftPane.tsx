import React, { useState } from 'react'
import { useGetStudentByIdQuery } from '../../../redux/services/studentService'

import { Flex, Text } from '@chakra-ui/react'

import ChatParticipant from './ChatParticipant'
import ChatDuration from './ChatDuration'
import ActionBox from './ActionBox'
import ActionZoom from './ActionZoom'
import ActionDecline from './ActionDecline'
import ActionComplete from './ActionComplete'

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

  const initialTime: number = 10
  const subscriptionRemainingSecs: number = student?.time_remaining || 9999
  return (
    <Flex
      direction="column"
      alignItems="center"
      textAlign="center"
      justify={isTutor ? 'flex-start' : 'stretch'}
      height={isTutor ? 'fit-content' : '81vh'}
      w="20rem"
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
      {!isTutor && canDecline && (
        <ActionBox>
          <Text>
            You have {initialTime} seconds before billing starts to decide
            whether you want to stay on the call or go back and look for another
            tutor.
          </Text>
          <ActionDecline helpRequestId={helpRequest.id} />
        </ActionBox>
      )}
      <ActionBox>
        <Text>Launch video call</Text>
        <ActionZoom zoom_url={helpRequest.zoom_url} />
      </ActionBox>
      {!isTutor && (
        <ActionBox>
          <Text>End the call</Text>
          <ActionComplete helpRequest={helpRequest} />
        </ActionBox>
      )}
    </Flex>
  )
}

export default ChatLeftPane
