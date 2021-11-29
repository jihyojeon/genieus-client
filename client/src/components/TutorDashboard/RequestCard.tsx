import {
  Flex,
  Box,
  Text,
  Divider,
  Image,
  Button,
  VStack,
} from '@chakra-ui/react'
import React from 'react'

interface HelpRequestTypes {
  name: string
}

export const RequestCard = ({ name }: HelpRequestTypes) => {
  return (
    <Box minWidth="24%" width="24%" rounded="3xl" ml="20px" bg="#4A5568">
      <VStack>
        <Flex alignItems="center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
            boxSize="10px"
            mx="5px"
          />
          <Text
            mt={1}
            fontSize="sm"
            fontWeight="semibold"
            lineHeight="short"
            color="#FFFFFF"
          >
            Python
          </Text>
        </Flex>
        <Text
          mt={2}
          fontSize="xl"
          fontWeight="semibold"
          lineHeight="short"
          color="#A5B4FC"
        >
          {name}
        </Text>
        <Text
          mt={2}
          fontSize="s"
          fontWeight="semibold"
          lineHeight="short"
          color="#FFFFFF"
        >
          #datastructures #linkedlist
        </Text>
        <Divider width="90%" />
        <Text
          mx={2}
          pb={10}
          fontSize="s"
          fontWeight="semibold"
          lineHeight="short"
          width="90%"
          color="#FFFFFF"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Button type="submit" variant="primary">
          Expand
        </Button>
      </VStack>
    </Box>
  )
}
