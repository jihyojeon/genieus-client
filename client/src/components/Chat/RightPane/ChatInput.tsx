import { Button, Flex, FormControl, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

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
              mr=".5rem"
              padding={6}
              placeholder="Send a message ..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <Button type="submit" padding={6} variant="solid" width="10rem">
              <FaPaperPlane />
              &nbsp;&nbsp; Send
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Flex>
  )
}
