import { ReactNode } from 'react'
import { Box, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react'

export default function ChatBubbleReceived() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const timeStamp = '14:32 [15s ago]'
  const sender: string = 'Vic'
  const message: string = "Blah blah blah blah"

  const gradColor: string = "#9e9e9e"

  // const format = {
  //   day: "numeric",
  //   month: "2-digit",
  //   year: "numeric"
  // };
  // const timeStamp = Date.now().toLocaleString("en-gb", format)

  return (
    <Box pt="20px">
      <Flex direction="column">
        <Box position="relative">
          <Flex justify="right">
            <Box
              align="right"
              bgGradient='linear(to-t, #9e9e9e, hsl(196, 65%, 62%))'
              border="1px"
              borderBottom="0px"
              borderBottomLeftRadius="1rem"
              borderTopLeftRadius="3rem"
              borderTopRightRadius="2rem"
              minWidth="10rem"
              mt="1rem"
              position="absolute"
              pr="1rem"
              top="-8"
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
              bg={gradColor}
              border="1px"
              borderTopLeftRadius="3rem"
              borderTopRightRadius="0rem"
              borderBottomLeftRadius="1rem"
              borderBottomRightRadius="3rem"
              mt="0"
              p="0.5rem"
              pl="7rem"
              pr="2rem"
              minWidth="60%"
              zIndex="1"
            >
              <Text align={'right'}>{message}</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}