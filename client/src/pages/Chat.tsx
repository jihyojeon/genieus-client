import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import ChatInput from '../components/Chat/BottomPane/ChatInput'
import ChatLeftPane from '../components/Chat/LeftPane/ChatLeftPane'
import ChatRightPane from '../components/Chat/RightPane/ChatRightPane'
import ChatTopBar from '../components/Chat/TopPane/ChatTopBar'

const minutes: number = 3
const seconds: number = minutes * 60
const zoomUrl =
  'https://zoom.us/j/91414924610?pwd=RHk3ZGxVMDlPY2lvMlU4R3RnSk1ZUT09'
const participantsArr: any = [
  {
    tutor: 'Vic',
    image: 'https://bit.ly/dan-abramov',
    exp1: 'JS',
    dur1: 1,
    exp2: 'Java',
    dur2: 2,
    online: 0,
    key: 0,
  },
  {
    tutor: 'Charley',
    image: 'https://bit.ly/ryan-florence',
    exp1: 'Ada',
    dur1: 2,
    exp2: 'Python',
    dur2: 2,
    online: 0,
    key: 1,
  },
]


const Chat = () => {
  return (
    <Grid
      gap={3}
      height="100%"
      overflowY={'hidden'}
      padding="3"
      templateColumns="repeat(3, 1fr)"
      templateRows="80px auto 100px"
    >
      <GridItem rowSpan={1} colSpan={3}>
        <ChatTopBar/>
      </GridItem>

      <GridItem rowSpan={2} colSpan={1}>
        <ChatLeftPane
          seconds={seconds}
          zoomUrl={zoomUrl}
          name={participantsArr[0].tutor}
          imageUrl={participantsArr[0].image}
          participantsArr={participantsArr}
          />
      </GridItem>

      <GridItem rowSpan={1} colSpan={2}>
        <ChatRightPane
          participantsArr={participantsArr}
        />
      </GridItem>

      <GridItem rowSpan={1} colSpan={2}>
        <ChatInput />
      </GridItem>
    </Grid>
  )
}

export default Chat
