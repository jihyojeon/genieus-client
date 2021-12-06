import React, { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import ChatBubble from './ChatBubble'
import socket, {
  checkAndReconnectToSocket,
} from '../../../redux/services/socket'
import { auth } from '../../../firebase'
import ChatInput from './ChatInput'

type Message = {
  authorID: string
  content: string
  postedDate: Date
}
type ChatRightPaneProps = {
  helpRequest: any
}

const ChatRightPane = ({ helpRequest }: ChatRightPaneProps) => {
  const [userID, setUserID] = useState<string | undefined>()
  const [msgs, setMsgs] = useState<Message[]>([])

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
      console.log(socket)
      socket.emit('join help request', helpRequest.id)
      socket.on('existing messages', (messages) => {
        console.log(messages)
        messages && setMsgs(messages)
      })
      socket.on('user joined chat', (user) => {
        console.log(user)
      })
      socket.on('user left chat', (user) => {
        console.log(user)
      })
      socket.on('get message', (message: Message) => {
        console.log('get message', message)
        setMsgs((priorMsgs) => [...priorMsgs, message])
      })
    }
    return () => {
      socket.emit('leave help request', helpRequest.id)
    }
  }, [userID])

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
        <Box
          paddingRight={'0.5rem'}
          pl="1rem"
          height="70vh"
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
          {messages}
        </Box>
      </Flex>
      <ChatInput sendHandler={sendHandler} />
    </>
  )
}

export default ChatRightPane
