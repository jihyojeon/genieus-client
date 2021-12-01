import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import ChatHeader from '../components/Chat/ChatHeader'
import ChatInput from '../components/Chat/ChatInput'
import ChatLeftPane from '../components/Chat/ChatLeftPane'
import ChatRightPane from '../components/Chat/ChatRightPane'
import ChatTopBar from '../components/Chat/ChatTopBar'

const Chat = () => {
  return (
    <Grid
      // bg={'tomato'}
      gap={3}
      height="100vh"
      maxheight="100%"
      overflowY={'hidden'}
      padding="3"
      templateColumns="repeat(3, 1fr)"
      templateRows="auto auto 1fr auto"
    >
      <GridItem rowSpan={1} colSpan={3} h="4rem"
        // bg="grey"
      >
        <ChatTopBar />
      </GridItem>

      <GridItem rowSpan={3} colSpan={1}
      // bg="yellow"
      >
        <ChatLeftPane/>
      </GridItem>

      <GridItem rowSpan={1} colSpan={2} h="3rem"
      // bg="cyan"
      >
        <ChatHeader />
      </GridItem>

      <GridItem rowSpan={1} colSpan={2} h="100%"
      // bg="red"
      >
        <ChatRightPane/>
      </GridItem>

      <GridItem rowSpan={1} colSpan={2}
      // bg="grey"
      >
        <ChatInput />
      </GridItem>
    </Grid>
  )
}

export default Chat
