import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { RequestCard } from './RequestCard'

export const IncomingRequests = () => {
  return (
    <Flex flexDirection="column">
      <Box>Your Requests:</Box>
      <Box>
        <RequestCard />
      </Box>

    </Flex>
  )
}
