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
// import { useBeforeunload } from 'react-beforeunload'

const ChatActions = (props: any) => {
  const navigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const name = props.name
  const imageUrl = props.imageUrl
  const zoomUrl = props.zoomUrl
  const seconds = props.seconds

  // TODO: ALL) DISPLAY WARNING IF ATTEMPT TO CLOSE THIS WINDOW - ATTEMPT AT THIS IS CURRENTLY ON CHAT PAGE

  // TODO: TAKE THIS STATUS FROM SIGN-IN DETAILS
  const [isTutor, setIsTutor] = useState(true)

  const zoomButtonHandler = () => {
    // TODO: 1) REPLACE COUNTDOWN TIMER WITH CREDIT REMAINING
    // TODO: 2) HANDLE RECORDING OF ELAPSED TIME
    
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

        {/* TESTING */}
        <Button w="100px" onClick={onOpen}>
          Decline
        </Button>
        <ModalDecline
          isOpen={isOpen}
          onClose={onClose}
          name={name}
          imageUrl={imageUrl}
        />
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
