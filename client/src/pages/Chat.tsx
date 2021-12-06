import React, { useState, useEffect } from 'react'
import {
  Grid,
  GridItem,
  Heading,
  // useColorModeValue
} from '@chakra-ui/react'
import ChatLeftPane from '../components/Chat/LeftPane/ChatLeftPane'
import ChatRightPane from '../components/Chat/RightPane/ChatRightPane'
import ChatTopBar from '../components/TopBar/TopBar'
import { useLocation } from 'react-router-dom'
import { auth } from '../firebase'

// TODO: FIXES REQUIRED:
// TODO: 1. REFRESHING PAGE RESETS COUNTDOWN TIMER
// TODO: DISPLAY WARNING IF ATTEMPTING TO CLOSE THIS WINDOW - ATTEMPT AT THIS IS COMMENTED OUT ABOVE AND BELOW?
// TODO: 2. REFACTOR PROP-DRILLING (START IN CHAT PAGE?)
// import { useBeforeunload } from 'react-beforeunload'

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

const Chat = () => {
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])

  const location = useLocation()
  const helpRequest: any = location.state
  console.log(helpRequest)
  if (!helpRequest) return <Heading>Error, not a valid help request</Heading>
  return (
    <Grid
      gap={3}
      overflowY={'hidden'}
      padding="3"
      templateColumns="repeat(3, 1fr)"
      templateRows="1fr auto"
    >
      <GridItem rowSpan={1} colSpan={3}>
        <ChatTopBar heading={'Chat'} tutor={userId === helpRequest.tutor_id} />
      </GridItem>
      {/* 
      <GridItem rowSpan={1} colSpan={1}>
        <ChatLeftPane />
      </GridItem>

      <GridItem rowSpan={1} colSpan={2}>
        <ChatRightPane />
      </GridItem> */}
    </Grid>
  )
}

export default Chat
