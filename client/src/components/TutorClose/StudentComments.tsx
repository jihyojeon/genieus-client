import React, { useState } from 'react'
import {
  Button,
  Center,
  Checkbox,
  Flex,
  Heading,
  InputGroup,
  Text,
  Textarea,
  VStack
} from '@chakra-ui/react'

const stars = () => {
  return console.log('test 2')
}

const tutorObj = {
  tutorName: 'Vic',
  callDuration: 25,
  photo: 'https://bit.ly/sage-adebayo',
}

const StudentComments = () => {
  const [tutorObjState, settutorObjState] = useState(tutorObj)
  const [tutorFeedback, setTutorFeedback] = useState('none')

  return (
    <Center>
      <Flex direction="column" align="center" mt="50px" >
        <VStack spacing={4}>
          <Heading size="sm">
            Are there any comments to share with {tutorObjState.tutorName}?
          </Heading>

          <InputGroup size="md">
            <Textarea
              bg="white"
              placeHolder="Leave feedback here"
              _placeholder={{ color: 'gray.500' }}
            />
          </InputGroup>

          <Flex flexDirection="column" align="center">
            <Text>
              Everyone responds differently to different teaching
              approaches.
            </Text>
            <Text>
              If you prefer {tutorObjState.tutorName} isn't assigned your requests in future, tick the box below.
            </Text>
            <Checkbox defaultIsNotChecked mt="1rem">
              Remove{' '}
            </Checkbox>
          </Flex>
        </VStack>
        <Flex direction="row">
          <Button mt="2rem" mr="2rem">Cancel</Button>
          <Button mt="2rem" ml="2rem">Submit</Button>
        </Flex>
      </Flex>
    </Center>
  )
}

export default StudentComments
