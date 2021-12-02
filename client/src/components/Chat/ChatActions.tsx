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

  const proceed = () => {
    // TODO: DEFINE WHAT OCCURS HERE: CLOCK KEEPS GOING, FORMALLY RECORD ON DATABASE WHAT?
    console.log('Commence session')
  }

  const abandon = () => {
    // TODO: DEFINE WHAT OCCURS HERE: FORMALLY RECORD ON DATABASE WHAT?
    console.log('Abandon session')
  }

  return (
    <Flex direction="column">
      <Box bg="grey" borderRadius="1rem" padding="1rem" marginTop={"1rem"} >
        <Heading
          fontFamily="montserrat"
          letterSpacing={1}
          fontSize={25}
          fontWeight={400}
        >
          Actions
        </Heading>

        <Flex direction="row" justify="center" align="center">
          <Button w="100px" mr="1rem" onClick={proceed}>
            Proceed
          </Button>
          <Button w="100px" ml="1rem" onClick={abandon}>
            Abandon
          </Button>
        </Flex>

      </Box>
    </Flex>
  )
}
