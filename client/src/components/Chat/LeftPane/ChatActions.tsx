import React, { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import ModalDecline from './ModalDecline'

const ChatActions = (props: any) => {
  const navigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const seconds = props.seconds
  const zoomUrl = props.zoomUrl

  // TODO: TAKE THIS STATUS FROM SIGN-IN DETAILS
  const [isTutor, setIsTutor] = useState(true)

  const decline = (props: any) => {
    console.log('Decline session')
    // TODO: DISPLAY 1) CONFIRMATION POPUP MODAL
    // TODO: DISPLAY 2) MODAL FOR BOTH PARTIES SIMULTANEOUSLY

    isTutor ? navigate('/tutor-dashboard') : navigate('/student-hr')
  }

  const zoomButtonHandler = () => {
    // TODO: 1) REPLACE COUNTDOWN TIMER WITH CLOCK
    // TODO: DISPLAY WARNING IF ATTEMPT TO CLOSE THIS WINDOW
    // TODO: HANDLE RECORDING OF ELAPSED TIME
    // TODO: DISPLAY PERIODIC WARNINGS
    console.log(zoomUrl)
    navigator.clipboard.writeText(zoomUrl)
    window.open(zoomUrl)
  }

  const complete = () => {
    // TODO: ALLOW EITHER STUDENT OR TUTOR TO CLICK COMPLETE
    // TODO: STOP TIMER AND RECORD VALUE
    // TODO: DISPLAY MODAL POPUP FOR BOTH
    // TODO: IF TUTOR -> RETURN TO TUTOR DASHBOARD
    // TODO: IF STUDENT -> RETURN TO STUDENT DASHBOARD
    console.log('Complete session')
  }

  return (
    <Flex direction="column">
      <Box bg="grey" borderRadius="1rem" padding="1rem" marginTop={'1rem'}>
        <Heading
          fontFamily="montserrat"
          letterSpacing={1}
          fontSize={25}
          fontWeight={400}
        >
          Actions
        </Heading>
        <Text>
          You have {seconds / 60} minutes to further discuss your problem and
          finalise whether to proceed with this help request.
        </Text>
        <Text mt="0.5rem">
          If either of you decline to proceed, or the timer finishes, you will
          not be charged for the elapsed time.
        </Text>

        <Button w="100px" onClick={decline}>
          Decline
        </Button>
        {/* TESTING */}

        <Button onClick={onOpen}>Test Button for Decline Modal Popup</Button>
        <ModalDecline isOpen={isOpen} onClose={onClose} />

        {/* TESTING */}

        <Divider mt="0.5rem" />
        <Text>If wishing to proceed, click Open Zoom below.</Text>
        <Button w="100px" onClick={zoomButtonHandler}>
          Open Zoom
        </Button>
        <Divider mt="0.5rem" />
        <Text>
          Once your help request is complete, click the button below to mark
          your call as complete.
        </Text>
        <Button w="100px" onClick={complete}>
          Complete
        </Button>
      </Box>
    </Flex>
  )
}

export default ChatActions
