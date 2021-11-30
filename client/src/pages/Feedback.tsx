import React from 'react'
import StarRating from '../components/Feedback/StarRating'
import StudentComments from '../components/Feedback/StudentComments'
import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

const Feedback = () => {
  return (
    <Center>
      <VStack align="center">
        <Flex
          mt="150px"
          direction="column"
          border="solid"
          borderRadius="3rem"
          padding="3rem"
        >
          <StarRating />
          <StudentComments />
        </Flex>
      </VStack>
    </Center>
  )
}

export default Feedback
