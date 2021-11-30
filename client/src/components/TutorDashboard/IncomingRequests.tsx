import { Box, Flex, List } from '@chakra-ui/react'
import React from 'react'
import { RequestCard } from './RequestCard'

export const IncomingRequests = () => {
  // requestNames is temporary until we get real data
  const requestNames = ['David', 'Magi', 'Eugene', 'Alexi', 'Charley']

  return (
    <Flex flexDirection="column">
      <Box
        my={2}
        ml={5}
        fontSize="xl"
        fontWeight="400"
        color="indigo.400"
        letterSpacing={0.5}
      >
        Your Requests:
      </Box>
      <List display="flex" overflow="scroll">
        {requestNames.map((name) => {
          return <RequestCard name={name} />
        })}
      </List>
    </Flex>
  )
}
