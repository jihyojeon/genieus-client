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


// TODO: IMPLEMENT ACTION ON SUBMIT
const submitHandler = () => {
  console.log('Submit clicked')
}

// TODO: RECORD 1) STARS, 2) COMMENTS, 3) REMOVE CHECKBOX
const StudentComments = (props: any) => {

  const name = props.name

  return (
    <Center>
      <VStack spacing={2}>
        <Heading size="sm">
          Are there any comments to share with {name}?
        </Heading>

        <InputGroup size="md">
          {/* TODO: RETURN THIS FEEDBACK */}
          <Textarea
            bg="white"
            placeHolder="Leave feedback here"
            _placeholder={{ color: 'gray.500' }}
          />
        </InputGroup>
        <Text>
          Everyone responds differently to certain teaching styles.
        </Text>
        <Text>
          If you prefer {name} isn't assigned to your future requests, tick the box below.
        </Text>
        <Checkbox defaultIsNotChecked mt="1rem">
          {/* TODO: HANDLE TICKBOX RECORDING */}
        </Checkbox>
          Remove{' '}
        <Flex direction="row">
          <Button mt="1rem" onClick={submitHandler}>Submit</Button>
        </Flex>
      </VStack>
    </Center>
  )
}

export default StudentComments
