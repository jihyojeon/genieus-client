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
    <Flex direction="column" h="100%">
      <Box
        align="center" 
        bg="lightgrey"
        borderRadius={"1rem"}
        marginRight="2rem"
        padding="0.5rem"
        paddingBottom="1rem"
        // TODO: ADD SCROLLBAR FOR WHEN SCREEN HEIGHT IS REDUCED
        overflowY={"scroll"}
        height={"80vh"}
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
