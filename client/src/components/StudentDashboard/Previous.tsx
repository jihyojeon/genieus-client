import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const issue: string = 'React Routing'
const duration: number = 36
const rating: number = 5
const tutor: string = "Vic"

const prevArr: any = [
  { issue: "0react router", duration: 21, tutor: "vic", rating: 4, key: 0 },
  { issue: "1react router", duration: 22, tutor: "vic", rating: 4, key: 1 },
  { issue: "2react router", duration: 23, tutor: "vic", rating: 4, key: 2 },
  { issue: "3react router", duration: 24, tutor: "vic", rating: 4, key: 3 },
  { issue: "4react router", duration: 25, tutor: "vic", rating: 5, key: 4 } ,
] 

const Previous = () => {
  return (
    // TODO: USE FLATLIST/MP TO POPULATE FAVOURITES FROM SERVER/STATE
    <Flex
      color={"white"}    
      flexDirection="column"
    >

    <Heading
      as="h1"
      size="xl"
      fontWeight="600"
      pb="0.5rem"
    > Previous
    </Heading>
    
      <Flex
        flexDirection="row"
        justify="flex-start"
        bg="blue"
        width={"100%"}
        // overflow={"scroll"}
        overflowY={"auto"}

        sx={{
          '&::-webkit-scrollbar': {
            width: '30px',
            borderRadius: '8px',
            backgroundColor: `rgba(0, 0, 0, 0.15)`,
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '8px',
            backgroundColor: `rgba(0, 0, 0, 0.45)`,
          },
        }}

      >

        {prevArr.map((el: any) => {
          return (
            <Box key={el.key}>
              <Flex flexDirection="column" mr="1rem" bg="purple" p={"0.5rem"} borderRadius={'1rem'} border="solid" width="300px">
                <Text>Issue solved - {el.issue}</Text>
                <Text>Duration - {el.duration}m</Text>
                <Text>Tutor - {el.tutor}</Text>
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
