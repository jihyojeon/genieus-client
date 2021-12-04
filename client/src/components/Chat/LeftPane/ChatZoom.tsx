import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import ModalDecline from './ModalDecline'
import ModalComplete from './ModalComplete'
// import { useBeforeunload } from 'react-beforeunload'

const ChatZoom = (props: any) => {
  const navigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const name = props.name
  const imageUrl = props.imageUrl
  const zoomUrl = props.zoomUrl
  const seconds = props.seconds

  // TODO: 1) TAKE THIS STATUS FROM SIGN-IN DETAILS
  const [isTutor, setIsTutor] = useState(true)

  const decline = () => {
    console.log('Decline session')
  }

  const zoomButtonHandler = () => {
    // TODO: 2) HANDLE RECORDING OF ELAPSED TIME
    navigator.clipboard.writeText(zoomUrl)
    window.open(zoomUrl)
  }

  const complete = () => {
    // TODO: 3) ALLOW EITHER STUDENT OR TUTOR TO CLICK COMPLETE AND REPLICATE POPUP ON BOTH
    // TODO: 4) ALLOW EITHER STUDENT OR TUTOR TO CLICK COMPLETE
    // TODO: 6) STOP TIMER AND RECORD VALUE
    console.log('Complete session')
  }

  // TODO: 7) DISPLAY WARNING IF ATTEMPTING TO CLOSE THIS WINDOW - ATTEMPT AT THIS IS CURRENTLY ON CHAT PAGE
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
    <Flex
      alignItems="center"
      bg={useColorModeValue('gray.100', 'gray.700')}
      borderRadius="1rem"
      direction="column"
      padding="1rem"
      marginTop={'1rem'}
      height="100%"
      justifyContent="space-between"
    >
      <Divider mt="0.5rem" />
      <Text>If wishing to proceed, click Open Zoom below.</Text>
      <Button w="100px" onClick={zoomButtonHandler}>
        Open Zoom
      </Button>
    </Flex>
  )
}

export default ChatZoom
