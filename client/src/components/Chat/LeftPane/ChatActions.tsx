import React, { ReactNode, useState } from 'react'
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

const ChatActions = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const chatLimit = props.limit
  const zoomUrl = props.zoomUrl

  console.log('PROPPS', props)
  console.log('PROPPS', zoomUrl)

  const decline = () => {
    // TODO: STOP CLOCK FOR BOTH
    // TODO: DISPLAY 1) CONFIRMATION 2) POPUP
    // TODO: IF TUTOR -> RETURN TO TUTOR DASHBOARD
    // TODO: IF STUDENT -> RETURN TO STUDENT HR
    console.log('Decline session')
  }

  const zoomButtonHandler = () => {
    // TODO: REPLACE COUNTDOWN WITH TIMER
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
          You have {chatLimit / 60} minutes to further discuss your problem and
          finalise whether to proceed with this help request.
        </Text>
        <Text mt="0.5rem">
          If either of you decline to proceed, or the timer finishes, you will
          not be charged for the elapsed time.
        </Text>
        <Button w="100px" onClick={decline}>
          Decline
        </Button>
        <Divider mt="0.5rem" />
        <Text>If wishing to proceed, click Open Zoom below.</Text>
        <Button w="100px" onClick={zoomButtonHandler}>
          Open Zoom
        </Button>
        <Divider mt="0.5rem" />
        <Text>
          Once your help request is complete, clikc the button below to mark
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
