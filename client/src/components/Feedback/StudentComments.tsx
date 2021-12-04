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




const StudentComments = (props: any) => {

  const name = props.name

  return (
    <Center>
      <VStack spacing={2}>
        <Heading size="sm">
          3. Are there any comments to share with {name}?
        </Heading>

        <InputGroup size="md">
          {/* TODO: RETURN THIS FEEDBACK */}
          <Textarea
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
        <Checkbox defaultIsNotChecked mt="1rem"></Checkbox>

      </VStack>
    </Center>
  )
}

export default StudentComments
