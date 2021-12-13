import {
  Box,
  Flex,
  Heading,
  List,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
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
    skip: !userId,
  })

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])

  return (
    <Flex flexDirection="column" maxWidth={'70vw'}>
      <Heading fontFamily="montserrat" fontWeight="400" ml={5} mb={5}>
        <Text>Open Requests</Text>
      </Heading>
      {/*@ts-ignore*/}
      {helpRequests.data && helpRequests.data.length ? (
        <List
          display="flex"
          minWidth={'10rem'}
          // overflow="scroll"
          border="1px solid"
          borderColor="gray"
          borderRadius="5px"
          py={3}
          overflowX={'auto'}
          overflowY={'auto'}
          sx={{
            '&::-webkit-scrollbar': {
              backgroundColor: 'gray.400',
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              width: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'indigo.200',
              borderRadius: '8px',
              width: '10px',
            },
          }}
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
      ) : (
        <Text ml={5}>
          New help requests will appear here. Add to your tech stack to see
          incoming help requests!
        </Text>
      )}
    </Flex>
  )
}
