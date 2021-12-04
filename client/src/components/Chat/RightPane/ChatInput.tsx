import { Box, Button, Flex, FormControl, Input } from '@chakra-ui/react'
import { useState } from 'react'

type ChatInputProps = {
  sendHandler: (message: string) => void
}

export default function ChatInput({ sendHandler }: ChatInputProps) {
  const [messageInput, setMessageInput] = useState('')
  // TODO: MAKE CHAT STICK TO BOTTOM OF SCREEN
  // TODO: CATCH TEXT INPUT

  return (
    <Box zIndex="10" minheight="70px" marginTop="2rem">
      <Flex direction="row" justify="flex-start" align="center">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (messageInput !== '') {
              sendHandler(messageInput)
              setMessageInput('')
            }
          }}
        >
          <FormControl>
            <Flex direction="row">
              <Input
                border="2px"
                borderRadius="1rem"
                colorScheme="indigo"
                letterSpacing={2}
                minHeight="4rem"
                mr="1rem"
                padding={8}
                placeholder="Chat Input"
                variant="outline"
                width="35vw"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <Button
                type="submit"
                border="2px"
                borderRadius="1rem"
                colorScheme="indigo"
                letterSpacing={2}
                ml="1rem"
                r
                padding={8}
                variant="solid"
                width="10rem"
              >
                Send
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Flex>
    </Box>
  )
}
