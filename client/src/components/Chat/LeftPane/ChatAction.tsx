
import React, { useEffect, useState } from 'react'

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

const ChatAction = (props: any) => {
  const navigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()


  const name = props.name
  const imageUrl = props.imageUrl
  const zoomUrl = props.zoomUrl
  const seconds = props.seconds
  const action = props.action

  const text = props.text
  const canDecline = props.canDecline


  // TODO: 1) TAKE THIS STATUS FROM SIGN-IN DETAILS
  const [isTutor, setIsTutor] = useState(true)

  const decline = () => {
    console.log('Decline session')
  }


  console.log('Decline State', props.DeclineState)


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


  const actionButton = (action: string) => {
    // DECLINE BUTTON
    if (action === 'decline') {
      // TODO: MAKE RENDERING OF THIS BOX AND BUTTON VANISH ONCE DECLINING WINDOW HAS RUN OUT
      if (canDecline) {
        return (
          <Box>
            <Button w="15ch" onClick={onOpen}>

              Decline {text}

            </Button>
            <ModalDecline
              isOpen={isOpen}
              onClose={onClose}
              name={name}
              imageUrl={imageUrl}
            />
          </Box>
        )

      } else {
        return <Text></Text>
      }

      // ZOOM BUTTON

    } else if (action === 'zoom') {
      return (
        <Box>
          <Button w="15ch" onClick={zoomButtonHandler}>
            Open Zoom
          </Button>
          {/* <ModalZoom
            isOpen={isOpen}
            onClose={onClose}
            name={name}
            imageUrl={imageUrl}
          /> */}
        </Box>
      )


      // COMPLETE BUTTON

    } else if (action === 'complete') {
      return (
        <Box>
          <Button w="15ch" onClick={onOpen}>
            Complete
          </Button>
          <ModalComplete
            isOpen={isOpen}
            onClose={onClose}
            name={name}
            imageUrl={imageUrl}
          />
        </Box>
      )

    }
  }

  const actionText = (action: string) => {

    // DECLINE TEXT
    if (action === 'decline') {
      // TODO: MAKE RENDERING OF THIS BOX AND BUTTON VANISH ONCE DECLINING WINDOW HAS RUN OUT
      // TODO: CHANGE TEXT IF STUDENT
      if (canDecline) {
        return (
          <Box>
            <Text>
              You have {seconds / 60} minutes to further discuss your problem
              and finalise whether to proceed with this help request.
            </Text>
            <Text mt="0.5rem">
              If either of you decline to proceed before the timer finishes, you
              will not be charged.
            </Text>
          </Box>
        )

      } else {
        return <Text>It is no longer possible to decline this session</Text>
      }

      // ZOOM TEXT

    } else if (action === 'zoom') {
      return (
        <Box>
          <Text>If wishing to proceed, click Open Zoom below.</Text>
        </Box>
      )


      // COMPLETE TEXT

    } else if (action === 'complete') {
      return (
        <Box>
          <Text>
            Once your help request is complete, click the button below to mark
            your call as complete.
          </Text>
        </Box>
      )

    }
  }

  return (
    <Flex
      alignItems="center"
      bg={useColorModeValue('gray.100', 'gray.700')}
      borderRadius="1rem"
      direction="column"
      padding="1rem"
      marginTop={'1rem'}
      height="100%"
      width="100%"

      justifyContent="center"

    >
      {actionText(action)}
      {actionButton(action)}
    </Flex>
  )
}

export default ChatAction
