import React, { useState, useEffect } from 'react'
import { Flex, Box, Heading, HStack, List, Text } from '@chakra-ui/react'
import { BiBox } from 'react-icons/bi'
import PreviousRequestCard from './PreviousRequestCard'
import { auth } from '../../firebase'
import { useGetHrRequestByValueQuery } from '../../redux/services/helpRequestService'

const PreviousRequests = () => {
  const [userId, setUserId] = useState()

  const helpRequests = useGetHrRequestByValueQuery(
    { tutor_id: userId },
    { skip: !userId }
  )

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])

  return (
    <Flex flexDirection="column" width="100%">
      <Box>
        <Heading as="h1" size="lg" fontWeight="300" pb="0.5rem" ml={5}>
          <HStack>
            <BiBox />
            <Text>Previous Requests</Text>
          </HStack>
        </Heading>
      </Box>
      {helpRequests.data && helpRequests.data.length ? (
        <List
          display="flex"
          overflow="scroll"
          border="1px solid"
          borderColor="gray"
          borderRadius="5px"
          px={4}
          mx={4}
          my={3}
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
            ? helpRequests.data
                .map((hr, index) => {
                  //@ts-ignore
                  return <PreviousRequestCard key={index} hr={hr} />
                })
                .reverse()
            : undefined}
        </List>
      ) : (
        <Text ml={5} mb={15} mt={15}>
          Previous help requests will appear here. Help someone out to see
          previous help requests!
        </Text>
      )}
    </Flex>
  )
}

export default PreviousRequests
