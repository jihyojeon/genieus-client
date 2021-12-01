import { ReactNode } from 'react'
import { Box, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react'

export default function ChatBubbleReceived() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const timeStamp = '14:32 [15s ago]'
  const sender: string = 'Vic'

  // const format = {
  //   day: "numeric",
  //   month: "2-digit",
  //   year: "numeric"
  // };
  // const timeStamp = Date.now().toLocaleString("en-gb", format)

  return (
    <Flex direction="column">
      <Flex justify="right">
        <Box
          align="right"
          bg="#9e9e9e"
          border="1px"
          borderBottom="0px"
          borderTopLeftRadius="3rem"
          borderTopRightRadius="1rem"
          mt="1rem"
          pr="1rem"
          width="30%"
          zIndex="2"
          >
          <Text align="right" fontSize="xs">
          {sender} - {timeStamp} 
          </Text>
        </Box>
      </Flex>

      <Flex justify="right">
        <Box
          bg="#9e9e9e"
          border="1px"
          borderTopLeftRadius="3rem"
          borderTopRightRadius="0rem"
          borderBottomLeftRadius="1rem"
          borderBottomRightRadius="3rem"
          p="1rem"
          pl="7rem"
          pr="2rem"
          mt="0"
          minWidth="60%"
          zIndex="1"
        >
          <Text align={'right'}>Chat Bubble Message</Text>
        </Box>
      </Flex>
    </Flex>
  )
}
