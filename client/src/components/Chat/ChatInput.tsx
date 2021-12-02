import { ReactNode } from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, useDisclosure } from '@chakra-ui/react'

export default function ChatInput() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      zIndex="10"
      // height="100%"
      // minheight="70px"
    >
      <Flex direction="row" justify="flex-start" align="center" position={"static"}>
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
          ml="2rem"
          padding={8}
          variant="outline"
          width="10rem"
        >Send
        </Button>
      </Flex>
    </Box>
  )
}
