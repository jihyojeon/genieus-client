import {
  Grid,
  GridItem,
  // useColorModeValue
} from '@chakra-ui/react'
import ChatLeftPane from '../components/Chat/LeftPane/ChatLeftPane'
import ChatRightPane from '../components/Chat/RightPane/ChatRightPane'
import ChatTopBar from '../components/Chat/TopPane/ChatTopBar'
// import { useBeforeunload } from 'react-beforeunload'

  // TODO: FIXES REQUIRED:
  // TODO: 1. REFRESHING PAGE RESETS COUNTDOWN TIMER
  // TODO: DISPLAY WARNING IF ATTEMPTING TO CLOSE THIS WINDOW - ATTEMPT AT THIS IS COMMENTED OUT ABOVE AND BELOW?
  // TODO: 2. REFACTOR PROP-DRILLING (START IN CHAT PAGE?)
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
  return (
    <Grid
      gap={3}
      overflowY={'hidden'}
      padding="3"
      templateColumns="repeat(3, 1fr)"
      templateRows="1fr auto"
    >
      <GridItem rowSpan={1} colSpan={3}>
        <ChatTopBar />
      </GridItem>

      <GridItem rowSpan={1} colSpan={1}>
        <ChatLeftPane />
      </GridItem>

      <GridItem rowSpan={1} colSpan={2}>
        <ChatRightPane />
      </GridItem>
    </Grid>
  )
}

export default Chat
