import React, { ReactNode, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

export default function ChatActions() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex direction="column">
      <Box bg="grey" borderRadius="1rem" padding="1rem" marginTop={"1rem"}>
        <Heading
          fontFamily="montserrat"
          letterSpacing={1}
          fontSize={25}
          fontWeight={400}
          pb={"1rem"}
        >
          Actions
        </Heading>

        <Flex direction="row" mb="1rem" align="center" justifyContent="space-evenly">
          <Button>Complete</Button>
          <Button>Abandon</Button>
        </Flex>

      </Box>
    </Flex>
  )
}
