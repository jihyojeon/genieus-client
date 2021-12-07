import React, {useState, useEffect} from 'react'
import {
  Flex,
  Box,
  List,
  Text
} from '@chakra-ui/react'

import PreviousRequestCard from './PreviousRequestCard'
import { auth } from '../../firebase'
import { useGetHrRequestByValueQuery } from '../../redux/services/helpRequestService'


const PreviousRequests = () => {
  const [userId, setUserId] = useState()

  const helpRequests = useGetHrRequestByValueQuery({tutor_id : userId}, {skip: !userId})

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
        Previous Requests:
      </Box>
      {helpRequests.data && helpRequests.data.length ?
      <List 
      display="flex" 
      overflow="scroll"
      border="1px solid"
      borderColor="rgba(127, 6, 219, .4)"
      borderRadius="5px"
      px={4}
      mx={4}
      my={3}
      >
        {helpRequests.error
        ? 'error'
        : helpRequests.isLoading
        ? 'loading'
        : helpRequests.data
        ? helpRequests.data.map((hr, index) => {
          //@ts-ignore
        return <PreviousRequestCard key={index} hr={hr}/>
        }).reverse() : undefined}
      </List>
      : <Text ml={5}>Previous help requests will appear here. Help someone out to see previous help requests!</Text>
      }

    </Flex>
  )
}

export default PreviousRequests
