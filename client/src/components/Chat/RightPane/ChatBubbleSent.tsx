import { Box, Flex, Text } from '@chakra-ui/react'

const ChatBubbleSent = (props: any) => {

  // TODO: REPLACE WITH PROPS?
  const timeStamp = '14:32 [20s ago]'
  const message: string = "Blah blah blah blah"

  return (
    <Box pt="20px" mt="1.5rem">
      <Flex direction="column">
        <Box position="relative">
          <Flex justify="left"> 
            <Box
              align="left"
              bgGradient='linear(to-b, #9e9e9e, hsl(196, 65%, 62%))'
              border="0px"
              borderBottom="0px"
              borderBottomRightRadius="1rem"
              borderTopLeftRadius="2rem"
              borderTopRightRadius="2rem"
              minWidth="10rem"
              mt="1rem"
              position="absolute"
              pl="1rem"
              top="-8"
              width="30%"
              zIndex="2"
            >
              <Text align="left" fontSize="xs">
                {timeStamp}
              </Text>
            </Box>
          </Flex>

          <Flex justify="left">
            <Box
              bg="hsl(196, 65%, 62%)"
              border="0px"
              borderTopLeftRadius="0rem"
              borderTopRightRadius="3rem"
              borderBottomLeftRadius="3rem"
              borderBottomRightRadius="1rem"
              mt="0"
              minWidth="60%"
              p="0.5rem"
              pl="2rem"
              pr="7rem"
              shadow={"dark-lg"}
              zIndex="1"
            >
              <Text align={'left'}>{message}</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default ChatBubbleSent