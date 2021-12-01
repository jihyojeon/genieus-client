import { ReactNode } from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, useDisclosure } from '@chakra-ui/react'

export default function ChatInput() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box zIndex="10" height="100%">
      <Flex direction="row" justify="flex-start" align="center">
        <FormControl>
          <Input
            placeholder="Chat Input"
            borderRadius="1rem"
            border="2px"
            minHeight="4rem"
            mr="2rem"

            letterSpacing={2}
            colorScheme="indigo"
            variant="outline"
            padding={8}

            />
        </FormControl>
        <Button
          ml="2rem"
          borderRadius="1rem"
          border="2px"
          width="10rem"

          letterSpacing={2}
          colorScheme="indigo"
          variant="outline"
          padding={8}

        >Send
        </Button>
      </Flex>
    </Box>
  )
}
