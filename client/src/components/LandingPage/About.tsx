import React from 'react'
import {
  Box,
  Grid,
  Heading,
  Flex,
  // useColorModeValue,
  GridItem,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import Lottie from 'lottie-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/Landing.css'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const workingMan: any = require('../../assets/lottie/working-man/36707-working-man.json')

const About = () => {
  return (
    <Box>
      <Box position="relative">
        <Text
          onClick={() => {
            window.scrollTo({
              left: 0,
              top: 700,
              behavior: 'smooth',
            })
          }}
          position="absolute"
          fontFamily="sans-serif"
          bottom={10}
          left={'45%'}
          id="findOut"
          opacity="0.5"
          letterSpacing={1.5}
          _hover={{ opacity: 0.8, cursor: 'pointer' }}
          align="center"
        >
          Find out more
          <FontAwesomeIcon
            style={{ marginLeft: '0.7rem', opacity: 0.6 }}
            icon={faArrowDown}
          />
        </Text>
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
            <Lottie
              id="lottiegif"
              animationData={workingMan}
              style={{ height: '70vh' }}
            />
          </Flex>
        </GridItem>

        <GridItem id="aboutInfo">
          <Flex
            id="about-text"
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
                id="about-header"
                mb={7}
                color="indigo.300"
                mt={1}
                fontWeight={200}
                fontFamily="sans-serif"
              >
                Receive instant tutoring from one of our experts!
              </Heading>

              <UnorderedList
                fontFamily="sans-serif"
                fontSize={20}
                lineHeight={10}
              >
                <ListItem>Debug any errors</ListItem>
                <ListItem>Create new features!</ListItem>
                <ListItem>Experienced advice</ListItem>
              </UnorderedList>
            </Flex>
            <Flex id="secondList" ml={20} flexDirection="column">
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
