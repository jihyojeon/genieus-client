import { ReactNode } from 'react'
import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import ChatBubbleSent from './ChatBubbleSent'
import ChatBubbleReceived from './ChatBubbleReceived'

export default function ChatRightPane() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex direction="column">
      <ChatBubbleSent />
      <ChatBubbleReceived />
      <ChatBubbleReceived />
      <ChatBubbleSent />
      <ChatBubbleReceived />
    </Flex>
  )
}
