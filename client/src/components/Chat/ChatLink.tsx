import React, { ReactNode, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

export default function ChatLink() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const zoomURL =
    'https://zoom.us/j/91414924610?pwd=RHk3ZGxVMDlPY2lvMlU4R3RnSk1ZUT09'

  const zoomButtonHandler = () => {
    window.open(zoomURL)
  }

  return (
    <Flex direction="column">
      <Box bg="grey" borderRadius="1rem" padding="1rem" marginTop={'1rem'}>
        <Heading
          fontFamily="montserrat"
          letterSpacing={1}
          fontSize={25}
          fontWeight={400}
        >
          Video Call Link
        </Heading>

        <Flex direction="row" justify="center" align="center">
          <Button w="100px" mr="1rem" onClick={zoomButtonHandler} href={zoomURL}>
            Open Zoom
          </Button>
          <Button w="100px" ml="1rem" onClick={() =>  navigator.clipboard.writeText(zoomURL)} href={zoomURL}>
            Copy Link
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}
