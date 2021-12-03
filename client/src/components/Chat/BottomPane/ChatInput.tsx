import { Box, Button, Flex, FormControl, Input } from '@chakra-ui/react'

export default function ChatInput() {

  // TODO: MAKE CHAT STICK TO BOTTOM OF SCREEN
  // TODO: CATCH TEXT INPUT


  const sendHandler = () => {
    console.log('SEND clicked')
  }

  return (
    <Box
      zIndex="10"
      minheight="70px"
      marginTop="2rem"
    >
      <Flex direction="row" justify="flex-start" align="center">
        <FormControl>
          <Input
            border="2px"
            borderRadius="1rem"
            colorScheme="indigo"
            letterSpacing={2}
            minHeight="4rem"
            mr="2rem"
            padding={8}
            placeholder="Chat Input"
            variant="outline"
            />
        </FormControl>
        <Button
          border="2px"
          borderRadius="1rem"
          colorScheme="indigo"
          letterSpacing={2}
          ml="2rem"r
          onClick={sendHandler}
          padding={8}
          variant="outline"
          width="10rem"
        >Send
        </Button>
      </Flex>
    </Box>
  )
}
