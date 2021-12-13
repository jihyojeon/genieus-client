import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'

type ChatBubbleProps = {
  message: string
  fromSelf: boolean
  from: string
}

const ChatBubble = ({ message, fromSelf, from }: ChatBubbleProps) => {
  const justify = fromSelf ? 'right' : 'left'
  const borders = fromSelf ? '2rem .5rem 2rem 2rem' : '.5rem 2rem 2rem 2rem'
  const bgLight = fromSelf ? 'blue.100' : 'gray.100'
  const bgDark = fromSelf ? 'blue.500' : 'gray.500'

  return (
    <Box pt="20px" mt="0.1rem">
      <Flex direction="column">
        <Box position="relative">
          <Flex justify={justify}>
            <Box
              align={justify}
              mt="1rem"
              position="absolute"
              pr=".5rem"
              top="-8"
              zIndex="2"
            >
              <Text align={justify} fontSize="xs">
                {from}
              </Text>
            </Box>
            <Box
              bg={useColorModeValue(bgLight, bgDark)}
              border="0px"
              borderRadius={borders}
              p="0.5rem 2rem"
              mb="1rem"
              shadow="md"
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

export default ChatBubble
