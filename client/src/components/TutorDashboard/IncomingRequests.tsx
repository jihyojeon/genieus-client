import { Box, Flex, List } from '@chakra-ui/react'
import React from 'react'
import { RequestCard } from './RequestCard'

export const IncomingRequests = () => {
  
  // requestNames is temporary until we get real data
  const requestNames = ['David', 'Magi', 'Eugene', 'Alexi', 'Charley']
  
  return (
    <Flex flexDirection="column">
      <Box mt={2} py={2} fontSize="xl" fontWeight="semibold" lineHeight="short" color="#A5B4FC">Your Requests:</Box>
      <List display="flex" overflow="scroll">
        {requestNames.map(name => {
          return <RequestCard name={name} />
        })}
      </List>

    </Flex>
  )
}
