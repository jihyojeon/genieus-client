import { ReactNode } from 'react'
import {
  Box,
  Heading,
  useDisclosure,
} from '@chakra-ui/react'
import ChatParticipants from './ChatParticipants'
import ChatLink from './ChatLink'
import ChatDuration from './ChatDuration'
import ChatActions from './ChatActions'

export default function ChatLeftPane() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box borderRadius={"1rem"} bg="lightgrey" padding="0.5rem" align="center" height="100%">
      <ChatParticipants />
      <ChatLink />
      <ChatDuration />
      <ChatActions />
    </Box>
  )
}
