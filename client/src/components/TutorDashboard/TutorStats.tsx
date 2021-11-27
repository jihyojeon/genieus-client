import { Box, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import React from 'react'

export const TutorStats = () => {
  return (
    <Flex flexDirection="column">
      <Image src="http://placekitten.com/300/200" borderRadius="3xl" p={3}></Image>
      <Image src="http://placekitten.com/300/350" borderRadius="3xl" p={3}></Image>
    </Flex>
  )
}
