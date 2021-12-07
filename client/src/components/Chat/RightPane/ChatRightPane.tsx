import React, { useState, useEffect } from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import ChatBubble from './ChatBubble'
import socket, {
  checkAndReconnectToSocket,
} from '../../../redux/services/socket'
import { auth } from '../../../firebase'
import ChatInput from './ChatInput'
import HRType from '../../../redux/services/helpRequestService'

type Message = {
  authorID: string
  content: string
  postedDate: Date
}
type ChatRightPaneProps = {
  helpRequest: HRType
  sessionOpen: boolean
}

const ChatRightPane = ({ helpRequest, sessionOpen }: ChatRightPaneProps) => {
  const [userID, setUserID] = useState<string | undefined>()
  const [msgs, setMsgs] = useState<Message[]>([])
  const navigate = useNavigate()

  // get userID from firebase
  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      setUserID(item?.uid)
    })
  }, [])
  // setup socket
  useEffect(() => {
    if (userID) {
      checkAndReconnectToSocket(userID)
      socket.emit('join help request', helpRequest.id)
      socket.on('existing messages', (messages) => {
        messages && setMsgs(messages)
      })
      socket.on('user joined chat', (user) => {
        console.log(user)
      })
      socket.on('user left chat', (user) => {
        console.log(user)
      })
      socket.on('get message', (message: Message) => {
        console.log('adding message', message.content)
        setMsgs((priorMsgs) => [...priorMsgs, message])
      })
      socket.on('chat closed', () => {
        navigate('/tutor-dashboard')
      })
    }
    return () => {
      socket.emit('leave help request', helpRequest.id)
    }
  }, [userID])

  useEffect(() => {
    if (!sessionOpen) {
      console.log('ending session')
      socket.emit('end session', helpRequest.id)
    }
  }, [sessionOpen])

  const sendHandler = (content: string) => {
    if (socket.connected) {
      const message = {
        content,
        authorID: userID || 'unknown',
        postedDate: new Date(),
      }
      setMsgs((priorMsgs) => [...priorMsgs, message])
      socket.emit('post message', helpRequest.id, message)
    }
  }

  const messages = msgs.map((msg, idx) => {
    return (
      <ChatBubble
        key={idx}
        message={msg.content}
        fromSelf={msg?.authorID === userID ? true : false}
      />
    )
  })

  return (
    <>
      <Flex direction="column">
        <Flex
          direction={'column-reverse'}
          paddingRight={'0.5rem'}
          pl="1rem"
          height="70vh"
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
          <Flex direction="column">{messages}</Flex>
        </Flex>
      </Flex>
      <ChatInput sendHandler={sendHandler} />
    </>
  )
}

export default ChatRightPane
