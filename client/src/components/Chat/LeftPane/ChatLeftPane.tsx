import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import ChatParticipant from './ChatParticipant'
import ChatDuration from './ChatDuration'
import ChatDecline from './ChatAction'
import ChatZoom from './ChatZoom'
import ChatComplete from './ChatComplete'
import ChatAction from './ChatAction'

const ChatLeftPane = (props: any) => {
  // PROPS FOR CHAT
  const seconds: number = props.seconds // MAX LENGTH OF CHAT BEFORE ACCEPT/DECLINE
  const zoomUrl: string = props.zoomUrl // ZOOM URL (COPIED TO CLIPBOARD AND USED IN BUTTON)
  const name: string = props.name // PROVIDES NAME OF OTHER PARTY
  const imageUrl: string = props.imageUrl // PROVIDES MUG SHOT OF OTHER PARTY

  return (
    <Flex direction="column" maxW="30rem" justify="stretch">
      <Flex
        direction="column"
        alignItems="center"
        textAlign="center"
        justify="stretch"
        height="80vh"
        padding="0.5rem"
        paddingLeft="1.5rem"
        paddingBottom="1rem"
        // TODO: ADD SCROLLBAR FOR WHEN SCREEN HEIGHT IS REDUCED
        overflowY={'scroll'}
        sx={{
          '&::-webkit-scrollbar': {
            backgroundColor: `rgba(150, 150, 190, 0.00)`,
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
        <Box
          bg={useColorModeValue('gray.100', 'gray.700')}
          borderRadius="1rem"
          marginTop={'1rem'}
          padding="1rem"
          width="100%"
        >
          <ChatParticipant name={name} imageUrl={imageUrl} />
        </Box>
        <Box
          bg={useColorModeValue('gray.100', 'gray.700')}
          borderRadius="1rem"
          marginTop={'1rem'}
          padding="1rem"
          width="100%"
        >
          <ChatDuration seconds={seconds} />
        </Box>


        <ChatAction
          action={"decline"}
          name={name}
          imageUrl={imageUrl}
          seconds={seconds}
          zoomUrl={zoomUrl}
          grow={1}
        />
                <ChatAction
          action={"zoom"}
          name={name}
          imageUrl={imageUrl}
          seconds={seconds}
          zoomUrl={zoomUrl}
          grow={1}
        />
                <ChatAction
          action={"complete"}
          name={name}
          imageUrl={imageUrl}
          seconds={seconds}
          zoomUrl={zoomUrl}
          grow={1}
        />
      </Flex>
    </Flex>
  )
}

export default ChatLeftPane
