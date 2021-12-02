import { ReactNode } from 'react'
import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import ChatBubbleSent from './ChatBubbleSent'
import ChatBubbleReceived from './ChatBubbleReceived'

export default function ChatRightPane() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex direction="column">
      <Box
        paddingRight={'0.5rem'}
        // TODO: ADD SCROLLBAR FOR WHEN SCREEN HEIGHT IS REDUCED
        height={"70vh"}
        minHeight="10%"
        overflowY={"scroll" }
        sx={{
          '&::-webkit-scrollbar': {
            backgroundColor: `rgba(150, 150, 190, 0.15)`,
            borderRadius: '8px',
            width: '16px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `rgba(160, 160, 230, 0.45)`,
            borderRadius: '8px',
          },
        }}
      >
        <ChatBubbleSent />
        <ChatBubbleReceived />
        <ChatBubbleReceived />
        <ChatBubbleSent />
        <ChatBubbleReceived />
        <ChatBubbleSent />
        <ChatBubbleReceived />
        <ChatBubbleSent />
        <ChatBubbleReceived />
      </Box>
    </Flex>
  )
}
