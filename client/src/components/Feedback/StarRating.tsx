import React, { useState } from 'react'
import {
  Flex,
  HStack,
  Text,
  // useColorModeValue
} from '@chakra-ui/react'
import { Rating } from 'react-simple-star-rating'

const StarRating = () => {
  // TODO: IMPLEMENT RETURNING OF STAR VALUE TO STUDENTCOMMENTS.TSX AND TUTOR'S RECORD ON SUBMIT
  const [rating, setRating] = useState(0)
  const handleRating = (rate: number) => {
    setRating(rate)
    console.log('Stars: ', rate)
  }

  // TODO: FIX THESE STARS TO DISPLAY HORIZONTALLY
  return (
    <Flex direction="row">
      <HStack>
      <Text>TEST</Text>

      <Rating onClick={handleRating} ratingValue={rating} />
      </HStack>
    </Flex>
  )
}

export default StarRating
