import { Box, Flex, Text } from '@chakra-ui/react'

const ChatBubbleReceived = (props: any) => {

   // TODO: REPLACE WITH PROPS?
  const timeStamp = '14:32 [15s ago]'
  const message: string = "Blah blah blah blah"
  const sender: string = 'Vic'

  const gradColor: string = "#9e9e9e"

  // const format = {
  //   day: "numeric",
  //   month: "2-digit",
  //   year: "numeric"
  // };
  // const timeStamp = Date.now().toLocaleString("en-gb", format)

  return (
    <Box pt="20px" mt="1.5rem">
      <Flex direction="column">
        <Box position="relative">
          <Flex justify="right">
            <Box
              align="right"
              bgGradient='linear(to-t, #9e9e9e, hsl(196, 65%, 62%))'
              border="0px"
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
              border="0px"
              borderTopLeftRadius="3rem"
              borderTopRightRadius="0rem"
              borderBottomLeftRadius="1rem"
              borderBottomRightRadius="3rem"
              mt="0"
              minWidth="60%"
              p="0.5rem"
              pl="7rem"
              pr="2rem"
              shadow={"dark-lg"}
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

export default ChatBubbleReceived