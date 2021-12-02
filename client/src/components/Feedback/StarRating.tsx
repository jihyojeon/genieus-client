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
  photo: 'https://bit.ly/sage-adebayo',
}

const StarRating = () => {
  const [tutorObjState, setTutorObjState] = useState(tutorObj)
  const [rating, setRating] = useState(0)

  const handleRating = (rate: number) => {
    setRating(rate)
    console.log('Stars: ', rate)
    // TODO: IMPLEMENT RETURNING OF STAR VALUE TO STUDENTCOMMENTS.TSX AND TUTOR'S RECORD ON SUBMIT
  }

  return (
    <Flex direction="column" align="center">
      <VStack spacing={4}>
        <Text>You were online for {tutorObjState.callDuration} minutes</Text>
        <Heading>How was your call with {tutorObjState.tutorName}?</Heading>
        <Avatar size="xl" src={tutorObjState.photo} />
        {/* TODO: FIX THESE STARS TO DISPLAY HORIZONTALLY */}
        <Rating onClick={handleRating} ratingValue={rating} />
      </VStack>
    </Flex>
  )
}

export default StarRating
