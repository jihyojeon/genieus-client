import { ReactNode } from 'react'
import { Box, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react'

export default function ChatBubbleSent() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const timeStamp = '14:32 [20s ago]'

  return (
    <Box>
      <Flex direction="column">
        <Flex justify="left">
          <Box
            align="left"
            bg="hsl(196, 65%, 62%)"
            border="1px"
            borderBottom="0px"
            borderTopLeftRadius="1rem"
            borderTopRightRadius="3rem"
            mt="1rem"
            pl="1rem"
            width="30%"
            >
            <Text align="left" fontSize="xs">
              {timeStamp}
            </Text>
          </Box>
        </Flex>

        <Flex justify="left">
          <Box
            bg="hsl(196, 65%, 62%)"
            border="1px"
            borderTopLeftRadius="0rem"
            borderTopRightRadius="3rem"
            borderBottomLeftRadius="3rem"
            borderBottomRightRadius="0%"
            p="1rem"
            pr="7rem"
            pl="2rem"
            mt="0"
            minWidth="60%"
            >
            <Text align={'left'}>Chat Bubble Message</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
    
    
  )
}






