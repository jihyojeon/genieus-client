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


// TODO: IMPLEMENT ACTION ON CANCEL
const cancelHandler = () => {
  console.log('Cancel clicked')
}

// TODO: IMPLEMENT ACTION ON SUBMIT
const submitHandler = () => {
  console.log('Submit clicked')
}

const tutorObj = {
  tutorName: 'Vic',
  callDuration: 25,
  photo: 'https://bit.ly/sage-adebayo',
}

// TODO: RECORD 1) STARS, 2) COMMENTS, 3) REMOVE CHECKBOX
const StudentComments = () => {
  const [tutorObjState, setTutorObjState] = useState(tutorObj)
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
              {/* TODO: HANDLE TICKBOX RECORDING */}
              Remove{' '}
            </Checkbox>
          </Flex>
        </VStack>
        <Flex direction="row">
          <Button mt="2rem" mr="2rem" onClick={cancelHandler}>Cancel</Button>
          <Button mt="2rem" ml="2rem" onClick={submitHandler}>Submit</Button>
        </Flex>
      </Flex>
    </Center>
  )
}

export default StudentComments
