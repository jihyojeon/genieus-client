import React, { ReactNode, useState } from 'react'
import { Box, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react'

export default function ChatDuration() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ duration, setDuration ] = useState(Date.now())

  const arrivalTime = Date.now()

  return (
    <Flex direction="column">
      <Box bg="grey" borderRadius="1rem" padding="1rem" marginTop={'1rem'}>
        <Heading
          fontFamily="montserrat"
          letterSpacing={1}
          fontSize={25}
          fontWeight={400}
        >
          Chat Time Remaining
        </Heading>

        <Flex direction="row" mb="1rem" justify="center">
          <Text mt="0.5rem">
            {arrivalTime}
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}
