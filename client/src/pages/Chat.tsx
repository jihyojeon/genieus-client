import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import ChatLeftPane from '../components/Chat/LeftPane/ChatLeftPane'
import ChatRightPane from '../components/Chat/RightPane/ChatRightPane'
import ChatTopBar from '../components/Chat/TopPane/ChatTopBar'

//
// CONSTANTS PROP DRILLED THROUGHOUT CHAT COMPONENTS - CHANGE HERE
//

const minutes: number = 3 // MAX LENGTH OF CHAT BEFORE ACCEPT/DECLINE IN MINUTES
const seconds: number = minutes * 60 // MAX LENGTH OF CHAT BEFORE ACCEPT/DECLINE CONVERTED TO SECONDS
const zoomUrl =
  'https://zoom.us/j/91414924610?pwd=RHk3ZGxVMDlPY2lvMlU4R3RnSk1ZUT09' // ZOOM URL (COPIED TO CLIPBOARD AND USED IN BUTTON)
const participantsObj: any = {
  name: 'Vic', // PROVIDES NAME OF OTHER PARTY
  image: 'https://bit.ly/dan-abramov', // PROVIDES MUG SHOT OF OTHER PARTY
}

const Chat = () => {
  return (
    <Grid
      gap={3}
      overflowY={'hidden'}
      padding="3"
      templateColumns="repeat(3, 1fr)"
      templateRows="1fr auto"
    >
      <GridItem rowSpan={1} colSpan={3}>
        <ChatTopBar seconds={seconds} zoomUrl={zoomUrl} />
      </GridItem>

      <GridItem rowSpan={1} colSpan={1}>
        <ChatLeftPane
          seconds={seconds}
          zoomUrl={zoomUrl}
          name={participantsObj.name}
          imageUrl={participantsObj.image}
        />
      </GridItem>

      <GridItem rowSpan={1} colSpan={2}>
        <ChatRightPane />
      </GridItem>
    </Grid>
  )
}

export default Chat
