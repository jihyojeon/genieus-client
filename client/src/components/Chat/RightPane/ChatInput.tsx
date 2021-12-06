import { Button, Flex, FormControl, Input } from '@chakra-ui/react'
import { useState } from 'react'

type ChatInputProps = {
  sendHandler: (message: string) => void
}

export default function ChatInput({ sendHandler }: ChatInputProps) {
  const [messageInput, setMessageInput] = useState('')

  return (
    <Flex direction="row" justify="flex-start" align="center" mt="1rem">
      <form
        style={{ width: '100%' }}
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
              width="100%"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <Button
              type="submit"
              border="2px"
              borderRadius="1rem"
              colorScheme="indigo"
              letterSpacing={2}
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
  )
}
