import React, { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useGetHrRequestByValueQuery } from '../../redux/services/helpRequestService'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { GrHelp } from 'react-icons/gr'

const Previous = () => {
  const [userId, setUserId] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      //@ts-ignore
      setUserId(item.uid)
    })
  }, [])
  //@ts-ignore
  const getHrRequests = useGetHrRequestByValueQuery({ student_id: userId }).data
  const sortedHR = getHrRequests
    ?.slice()
    .sort(
      (a, b) =>
        new Date(b.time_opened).getTime() - new Date(a.time_opened).getTime()
    )

  function displayDate(date: Date) {
    const timeUnits = [
      ['day', 1000 * 60 * 60 * 24],
      ['hour', 1000 * 60 * 60],
      ['min', 1000 * 60],
    ]
    const deltaTime = Date.now() - new Date(date).getTime()
    for (let set of timeUnits) {
      let key = set[0]
      let value = set[1]
      let amount = Math.floor(deltaTime / Number(value))
      if (amount >= 1) {
        let plural = amount > 1 ? 's' : ''
        if (key === 'day' && amount >= 2) {
          let day = date.toString().slice(8, 10)
          let month = date.toString().slice(5, 7)
          let year = date.toString().slice(0, 4)
          return `${day}/${month}/${year}`
        }
        return `${amount} ${key}${plural} ago`
      }
    }
    return `now`
  }

  function displayRating(el: any) {
    if (el.status === 'pending') {
      return
    } else {
      if (el.rating) {
        // return
      } else {
        return <Text as="mark">Please rate your tutor!</Text>
      }
    }
  }

  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const iconColor = { color: useColorModeValue('gray.700', 'gray.100') }

  return (
    // TODO: USE FLATLIST/MP TO POPULATE FAVOURITES FROM SERVER/STATE
    <Flex py={3} ml={7} flexDirection="column">
      <Heading as="h1" size="lg" fontWeight="300" pb="0.5rem">
        Recent Help Requests
      </Heading>
      <Grid
        m="5"
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(5, 1fr)"
      >
        {sortedHR?.map((el: any) => {
          return (
            <Box
              key={el.key}
              width="270px"
              boxShadow="base"
              m={2}
              p={5}
              rounded={'lg'}
              onClick={() => navigate('/student-hr', { state: el })}
              _hover={{
                bg: bgColor,
                cursor: 'pointer',
              }}
            >
              <Flex>
                <GrHelp size={'1.5em'} style={iconColor} />
                <Box ml={3}>
                  <Text as="kbd">{displayDate(el.createdAt)}</Text>
                  <Text>{el.language}</Text>
                  <Text>
                    Tutor : {el.tutor_id ? el.tutor.name : 'not assigned yet'}
                  </Text>
                  {displayRating(el)}
                </Box>
              </Flex>
            </Box>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default Previous
