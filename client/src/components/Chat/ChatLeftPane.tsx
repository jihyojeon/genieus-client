import { ReactNode } from 'react'
import {
  Box,
  Flex,
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
    <Flex direction="column">
      <Box
        align="center" 
        bg="lightgrey"
        borderRadius={"1rem"}
        height="70vh"
        marginRight="2rem"
        overflowY={"scroll"}
        padding="0.5rem"
        
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
        <ChatParticipants />
        <ChatLink />
        <ChatDuration />
        <ChatActions />
      </Box>
    </Flex>
  )
}
