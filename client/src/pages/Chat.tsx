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
      gap={3}
      height="100%"
      overflowY={'hidden'}
      padding="3"
      templateColumns="repeat(3, 1fr)"
      templateRows="80px auto 100px"
      // templateRows="80px auto 120px"
    >
      <GridItem
        rowSpan={1}
        colSpan={3}
        // h="70px"
      >
        <ChatTopBar />
      </GridItem>

      <GridItem rowSpan={2} colSpan={1}>
        <ChatLeftPane />
      </GridItem>

      {/* <GridItem rowSpan={1} colSpan={2} h="3rem">
        <ChatHeader />
      </GridItem> */}

      <GridItem rowSpan={1} colSpan={2}>
        <ChatRightPane />
      </GridItem>

      <GridItem
        rowSpan={1}
        colSpan={2}
        // h="60px"
      >
        <ChatInput />
      </GridItem>
    </Grid>
  )
}

export default Chat
