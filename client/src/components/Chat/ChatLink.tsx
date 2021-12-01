import React, { ReactNode, useState } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

export default function ChatLink() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex direction="column">
      <Box bg="grey" borderRadius="1rem" padding="1rem" marginTop={"1rem"}>
        <Heading
          fontFamily="montserrat"
          letterSpacing={1}
          fontSize={25}
          fontWeight={400}
        >
          Video Call Link
        </Heading>


        <Flex direction="row" mb="1rem" justify="center">
          <Text>https://zoom.us/j/91414924610?pwd=RHk3ZGxVMDlPY2lvMlU4R3RnSk1ZUT09</Text>
        </Flex>


      </Box>
    </Flex>
  )
}
