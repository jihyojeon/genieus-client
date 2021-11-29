import React from 'react'
import {
  Box,
  Grid,
  Heading,
  useColorModeValue,
  Flex,
  GridItem,
  Link,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import Lottie from 'lottie-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const dark = '#121212'
const light = 'gray.100'

const jsIcon: any = require('../../assets/icons/javascript-1.svg')
const workingMan: any = require('../../assets/lottie/working-man/36707-working-man.json')

const About = () => {
  return (
    <Box>
      <Box position="relative">
        <Link href="#link-header">
          <Text
            position="absolute"
            fontFamily="sans-serif"
            bottom={10}
            left={'45%'}
            opacity="0.5"
            letterSpacing={1.5}
            _hover={{ opacity: 0.8, cursor: 'pointer' }}
            align="center"
          >
            Find out more...
            <FontAwesomeIcon icon={faArrowDown} />
          </Text>
        </Link>
      </Box>
      <Heading
        id="link-header"
        align="center"
        fontWeight={400}
        letterSpacing={2}
        fontFamily="chivo"
      >
        Get help from expert Software Developers
      </Heading>
      <Grid templateColumns="2.3fr 3fr">
        <GridItem>
          <Flex h="90vh" justifyContent="center" alignItems="flex-start">
            <Lottie animationData={workingMan} style={{ height: '70vh' }} />
          </Flex>
        </GridItem>

        <GridItem>
          <Flex
            h="90vh"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexDirection="column"
            pt={20}
            mr={20}
          >
            <Flex mb={50} ml={20} flexDirection="column">
              <Heading
                as="h3"
                size="lg"
                mb={7}
                color="indigo.300"
                mt={1}
                fontWeight={200}
                fontFamily="sans-serif"
              >
                Recieve instant tutoring from one of our experts!
              </Heading>

              <UnorderedList
                fontFamily="sans-serif"
                fontSize={20}
                lineHeight={10}
                mt={5}
              >
                <ListItem>Debug any errors</ListItem>
                <ListItem>Create new features!</ListItem>
                <ListItem>Experienced advice</ListItem>
              </UnorderedList>
            </Flex>
            <Flex ml={20} flexDirection="column">
              <Heading
                as="h3"
                size="lg"
                color="indigo.300"
                fontFamily="sans-serif"
                fontWeight={200}
              >
                Fix any coding issue with our expert tutors
              </Heading>

              <UnorderedList
                fontFamily="sans-serif"
                fontSize={20}
                lineHeight={10}
                mt={5}
              >
                <ListItem>Favourite your mentors</ListItem>
                <ListItem>Expert mentorship at your fingertips</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default About
