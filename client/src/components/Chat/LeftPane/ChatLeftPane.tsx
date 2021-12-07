import React, { useState } from 'react'
import { useGetStudentByIdQuery } from '../../../redux/services/studentService'

import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

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
  setSessionOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ChatLeftPane = ({
  helpRequest,
  userId,
  isTutor,
  setSessionOpen,
}: ChatLeftPaneProps) => {
  const [canDecline, setCanDecline] = useState(true)

  const studentQuery = useGetStudentByIdQuery(helpRequest.student_id)
  const initialTime: number = 10
  const subscriptionRemainingSecs: number = studentQuery.isSuccess
    ? studentQuery.data.time_remaining
    : 999
  return (
    <Flex
      direction="column"
      alignItems="center"
      textAlign="center"
      justify={isTutor ? 'flex-start' : 'stretch'}
      height={isTutor ? 'fit-content' : '81vh'}
      w="18rem"
      mr="0.5rem"
      paddingTop="0.5rem"
      paddingLeft="1rem"
      paddingRight="1rem"
      paddingBottom="1rem"
      overflowY={'auto'}
      sx={{
        '&::-webkit-scrollbar': {
          backgroundColor: useColorModeValue('indigo.50', 'gray.700'),
          borderRadius: '8px',
          backgroundClip: 'padding-box',
          width: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: useColorModeValue('indigo.200', 'gray.600'),
          borderRadius: '8px',
          width: '10px',
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
            whether you want to stay on the call or look for another tutor.
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
          <ActionComplete
            helpRequest={helpRequest}
            setSessionOpen={setSessionOpen}
          />
        </ActionBox>
      )}
    </Flex>
  )
}

export default ChatLeftPane
