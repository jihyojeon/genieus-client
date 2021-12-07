import { Box, Flex, List, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import HRType, {
  useGetPendingHRByIdQuery,
} from '../../redux/services/helpRequestService'
import { RequestCard } from './RequestCard'
import { auth } from '../../firebase'

export const IncomingRequests = () => {
  const [userId, setUserId] = useState()

  //@ts-ignore
  const helpRequests = useGetPendingHRByIdQuery(userId, {
    pollingInterval: 3000,
    skip: !userId
  })

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])

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
        Open Requests:
      </Box>
      {/*@ts-ignore*/}
      {helpRequests.data && helpRequests.data.length ? 
      <List
        display="flex"
        overflow="scroll"
        border="1px solid"
        borderColor="rgba(127, 6, 219, .4)"
        borderRadius="5px"
        py={3}
      >
        {helpRequests.error
          ? 'error'
          : helpRequests.isLoading
          ? 'loading'
          : helpRequests.data
          ? helpRequests.data.map((hr, index) => {
              //@ts-ignore
              return <RequestCard key={index} hr={hr} />
            })
          : undefined}
      </List>
      : <Text ml={5}>New help requests will appear here. Add to your tech stack to see incoming help requests!</Text>
    }
    </Flex>
  )
}
