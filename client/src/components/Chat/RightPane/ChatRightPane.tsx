import React, { useState, useEffect } from 'react'
import {
  Flex,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Text,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import ChatBubble from './ChatBubble'
import socket, {
  checkAndReconnectToSocket,
} from '../../../redux/services/socket'
import { auth } from '../../../firebase'
import ChatInput from './ChatInput'
import HRType from '../../../redux/services/helpRequestService'
import { FaComment, FaCode, FaFileAlt } from 'react-icons/fa'
import Editor from '@monaco-editor/react'

type Message = {
  authorID: string
  content: string
  postedDate: Date
}
type ChatRightPaneProps = {
  helpRequest: HRType
  sessionOpen: boolean
  participantName: string
}

const ChatRightPane = ({
  helpRequest,
  sessionOpen,
  participantName,
}: ChatRightPaneProps) => {
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
        // console.log(user)
      })
      socket.on('user left chat', (user) => {
        // console.log(user)
      })
      socket.on('get message', (message: Message) => {
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
        from={msg?.authorID === userID ? 'You' : participantName}
      />
    )
  })
  const codeTheme = useColorModeValue('vs-light', 'vs-dark')

  return (
    <Box height="70vh">
      <Tabs height="100%" colorScheme="indigo">
        <TabList>
          <Tab>
            <FaComment />
            &nbsp;&nbsp;Chat
          </Tab>
          <Tab>
            <FaFileAlt />
            &nbsp;&nbsp; Description
          </Tab>
          <Tab>
            <FaCode />
            &nbsp;&nbsp; Code
          </Tab>
        </TabList>

        <TabPanels height="100%">
          <TabPanel height="100%">
            <Flex direction="column" height="100%">
              <Flex
                direction={'column-reverse'}
                paddingRight={'0.5rem'}
                height="100%"
                pl="1rem"
                overflowY={'auto'}
                sx={{
                  '&::-webkit-scrollbar': {
                    backgroundColor: useColorModeValue('indigo.50', 'gray.700'),
                    borderRadius: '8px',
                    backgroundClip: 'padding-box',
                    width: '10px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: useColorModeValue(
                      'indigo.200',
                      'gray.600'
                    ),
                    borderRadius: '8px',
                    width: '10px',
                  },
                }}
              >
                <Flex direction="column">{messages}</Flex>
              </Flex>
            </Flex>
            <ChatInput sendHandler={sendHandler} />
          </TabPanel>
          <TabPanel>
            <Text>{helpRequest.description && helpRequest.description}</Text>
          </TabPanel>
          <TabPanel>
            {helpRequest.code && (
              <Editor
                height="65vh"
                language={helpRequest.language.toLowerCase() || 'javascript'}
                defaultValue="// No code sample was provided"
                value={helpRequest.code}
                theme={codeTheme}
                options={{ readOnly: true, contextmenu: false }}
              />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default ChatRightPane
