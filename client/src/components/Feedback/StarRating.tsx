import React, { useState } from 'react'
import {
  Avatar,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { Rating } from 'react-simple-star-rating'

const tutorObj = {
  tutorName: 'Vic',
  callDuration: 25,
  photo: "https://bit.ly/sage-adebayo",
}

const stars = () => {
  return console.log('test 2')
}

const StarRating = () => {
  const [tutorObjState, settutorObjState] = useState(tutorObj)
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate)
  }

  return (
    <Flex direction="column" align="center">
      <VStack spacing={4}>
        <Text>
          You were online for{' '}
          {tutorObjState.callDuration} minutes
        </Text>
        <Heading>How was your call with {tutorObjState.tutorName}?</Heading>
        <Avatar size="xl" src={tutorObjState.photo}/>

          <h1>Test</h1>
          <h1>Test</h1>
          <Rating
            onClick={handleRating}
            ratingValue={rating}
          
            />
            
      </VStack>
    </Flex>
  )
}

export default StarRating
