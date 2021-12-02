import { Box, Flex } from '@chakra-ui/react'
import ChatDuration from './ChatDuration'
import ChatActions from './ChatActions'
import ChatParticipant from './ChatParticipant'

const ChatLeftPane = ( props: any  ) => {

  // PROPS FOR CHAT
  const seconds: number = props.seconds
  const zoomUrl: string = props.zoomUrl
  const name:string = props.name
  const imageUrl:string = props.imageUrl

  return (
    <Flex direction="column" h="100%" position="relative">
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
        <Flex direction="row">
          <ChatDuration 
            seconds={seconds}
          />
          <ChatParticipant
            name={name}
            imageUrl={imageUrl}
          />
        </Flex>
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
