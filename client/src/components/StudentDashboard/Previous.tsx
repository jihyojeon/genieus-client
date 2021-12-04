import React, { useState, useEffect } from 'react'
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react'
import { useGetHrRequestByValueQuery } from '../../redux/services/helpRequestService'
import { auth } from '../../firebase'
import moment from 'moment'

const Previous = () => {
  const [userId, setUserId] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])
  //@ts-ignore
  const getHrRequests = useGetHrRequestByValueQuery({ student_id: userId })
  return (
    // TODO: USE FLATLIST/MP TO POPULATE FAVOURITES FROM SERVER/STATE
    <Flex py={3} ml={7} color={'white'} flexDirection="column">
      <Heading as="h1" size="lg" fontWeight="300" pb="0.5rem">
        Recent Help Requests
      </Heading>

      <Flex
        flexDirection="row"
        justify="flex-start"
        overflowY={'auto'}
        width={'100%'}
        // sx={{
        //   '&::-webkit-scrollbar': {
        //     backgroundColor: `rgba(150, 150, 190, 0.15)`,
        //     borderRadius: '5px',
        //     width: '30px',
        //   },
        //   '&::-webkit-scrollbar-thumb': {
        //     backgroundColor: `rgba(160, 160, 230, 0.45)`,
        //     borderRadius: '5px',
        //   },
        // }}
      >
        {getHrRequests?.data?.map((el: any) => {
          return (
            <Box key={el.key}>
              <Flex
                borderRadius={'10px'}
                border="1px solid"
                borderColor="indigo.400"
                flexDirection="column"
                boxShadow="rgba(72, 113, 247, 0.35) 0px 5px 15px"
                mb="1rem"
                mr="1rem"
                p={'0.5rem'}
                width="300px"
              >
                <Text>Issue solved - {el.issue}</Text>
                {/* <Text>Tutor - {el.tutor}</Text> */}
                <Text>Date: {moment(el.createdAt).format('l')}</Text>
                <Text>Langauge: {el.language}</Text>

                <Text>Rating - {el.rating}</Text>
              </Flex>
            </Box>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Previous
