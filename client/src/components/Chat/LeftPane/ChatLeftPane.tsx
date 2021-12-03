import { Box, Flex } from '@chakra-ui/react'
import ChatDuration from './ChatDuration'
import ChatActions from './ChatActions'
import ChatParticipant from './ChatParticipant'

const ChatLeftPane = ( props: any  ) => {

  // PROPS FOR CHAT
  const seconds: number = props.seconds // MAX LENGTH OF CHAT BEFORE ACCEPT/DECLINE
  const zoomUrl: string = props.zoomUrl // ZOOM URL (COPIED TO CLIPBOARD AND USED IN BUTTON)
  const name:string = props.name // PROVIDES NAME OF OTHER PARTY 
  const imageUrl:string = props.imageUrl // PROVIDES MUG SHOT OF OTHER PARTY

  return (
    <Flex direction="column"  >
      <Box
        align="center"
        bg="lightgrey"
        borderRadius={'1rem'}
        padding="0.5rem"
        paddingLeft="1.5rem"
        paddingBottom="1rem"
        // TODO: ADD SCROLLBAR FOR WHEN SCREEN HEIGHT IS REDUCED
        overflowY={'scroll'}
        sx={{
          '&::-webkit-scrollbar': {
            backgroundColor: `rgba(150, 150, 190, 0.00)`,
            borderRadius: '8px',
            width: '16px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `rgba(160, 160, 230, 0.45)`,
            borderRadius: '8px',
            width: '16px',
          },
        }}
      >
        <Box
          bg="grey"
          borderRadius="1rem"
          marginTop={'1rem'}
          padding="1rem"
          width="100%"
        >
          <Flex
            direction="row"
            align="flex-end"
          >
            <ChatDuration 
              seconds={seconds}
              />
            <ChatParticipant
              name={name}
              imageUrl={imageUrl}
            />
          </Flex>
        </Box>
        <ChatActions
          name={name}
          imageUrl={imageUrl}
          seconds={seconds}
          zoomUrl={zoomUrl}
        />

      </Box>
    </Flex>
  )
}

export default ChatLeftPane
