import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Image,
    VStack,
    Text,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const language: string = 'JavaScript'
const duration: number = 3
const colorFavCard = "#C7D2FE"

const Favourites = () => {
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
        pt={'1rem'}
      >
        Favourites
      </Heading>
      <VStack
        borderColor={'white'}
        borderWidth={'solid'}
        borderRadius={'2rem'}
        h="100%"
      >
        <Box>
          <Flex flexDirection="row">
            <Flex flexDirection="column">
              <Image
                src="https://bit.ly/dan-abramov"
                boxSize="4rem"
                borderRadius="2rem"
                ml="5"
                />
              </Flex>
              <Flex>
                <Text>Vic</Text>
                <Text>Experience</Text>
                <Text>{language} - {duration} years</Text>
                <Text>Experience</Text>
              </Flex>
          </Flex>
        </Box>
      </VStack>
    </Flex>
  )
}

export default Favourites
