import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
// import {getPendingHRById}

const prevArr: any = [
  {
    issue: 'React router',
    date: '21 May 2021',
    duration: 21,
    tutor: 'Vic',
    rating: 4,
    key: 0,
  },
  {
    issue: 'Python',
    date: '22 May 2021',
    duration: 22,
    tutor: 'Charlie',
    rating: 4,
    key: 1,
  },
  {
    issue: 'Figma',
    date: '23 May 2021',
    duration: 23,
    tutor: 'Tobias',
    rating: 4,
    key: 2,
  },
  {
    issue: 'C++',
    date: '24 May 2021',
    duration: 24,
    tutor: 'Vic',
    rating: 4,
    key: 3,
  },
  {
    issue: 'Fortran',
    date: '25 May 2021',
    duration: 25,
    tutor: 'Jess',
    rating: 5,
    key: 4,
  },
]



const Previous = () => {
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
        {prevArr.map((el: any) => {
          return (
            <Box key={el.key}>
              <Flex
                bg={'gray.600'}
                borderRadius={'10px'}
                flexDirection="column"
                mb="1rem"
                mr="1rem"
                p={'0.5rem'}
                width="300px"
              >
                <Text>Issue solved - {el.issue}</Text>
                <Text>Tutor - {el.tutor}</Text>
                <Text>
                  {el.date} [{el.duration} minutes]
                </Text>
                {/* TODO: CHANGE TO STAR RATING */}
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
