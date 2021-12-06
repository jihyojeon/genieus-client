import React from 'react'
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  useDisclosure,
} from '@chakra-ui/react'
import Lottie from 'lottie-react'
import { ProgrammingLanguages } from '../../assets/devicon/ProgrammingLanguages'

// Modals
import ModalSignUp from './ModalSignUp'
import TutorSignInArea from './TutorSignInArea'

const codingLottie: any = require('../../assets/lottie/coder/data.json')

const Hero = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Grid templateColumns="2.3fr 2fr">
        <GridItem>
          <Flex
            pt={20}
            h="80vh"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Flex ml={20} flexDirection="column">
              <Heading
                as="h3"
                size="2xl"
                mb={7}
                mt={5}
                fontWeight={300}
                fontFamily="chivo"
              >
                Find one-on-one tutoring instantly
              </Heading>
              <Heading color="indigo.400" as="h4" size="lg" fontWeight={300}>
                Fix any coding issue with our experts!
              </Heading>
              <Flex
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                mt={10}
              >
                <Button colorScheme="indigo" onClick={onOpen} mr="7">
                  Sign Up
                </Button>

                <Button
                  colorScheme="indigo"
                  variant="outline"
                  onClick={() => {
                    window.scrollTo({
                      left: 0,
                      top: 700,
                      behavior: 'smooth',
                    })
                  }}
                >
                  Learn more
                </Button>
              </Flex>
              <TutorSignInArea />
            </Flex>
          </Flex>
        </GridItem>

        <GridItem>
          <Box>
            <Flex
              h="80vh"
              maxH="400px"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Lottie animationData={codingLottie} style={{ height: '80vh' }}>
                <Box position="relative">
                  <Image
                    src={ProgrammingLanguages.javascript}
                    boxSize="50px"
                    position="absolute"
                    opacity="0.6"
                    top="40vh"
                    right="90%"
                    borderRadius="50px"
                  />

                  <Image
                    src={ProgrammingLanguages.python}
                    boxSize="60px"
                    position="absolute"
                    opacity="0.6"
                    top="10vh"
                    right="75%"
                    borderRadius="full"
                  />

                  <Image
                    src={ProgrammingLanguages.java}
                    boxSize="60px"
                    position="absolute"
                    opacity="0.6"
                    top="70vh"
                    right="70%"
                    borderRadius="50px"
                  />

                  <Image
                    src={ProgrammingLanguages.react}
                    boxSize="60px"
                    position="absolute"
                    opacity="0.6"
                    top="5vh"
                    right="55%"
                    borderRadius="50px"
                  />

                  <Image
                    src={ProgrammingLanguages.firebase}
                    boxSize="60px"
                    position="absolute"
                    opacity="0.6"
                    top="10vh"
                    right="20%"
                    borderRadius="full"
                  />

                  <Image
                    src={ProgrammingLanguages.redux}
                    boxSize="60px"
                    position="absolute"
                    opacity="0.6"
                    top="65vh"
                    right="15%"
                    borderRadius="20px"
                  />
                  <Image
                    src={ProgrammingLanguages.c}
                    boxSize="60px"
                    position="absolute"
                    opacity="0.6"
                    top="35vh"
                    right="5%"
                    borderRadius="20px"
                  />
                </Box>
              </Lottie>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        height="100px"
        width="100vw"
      ></Box>
      {/* @ts-ignore */}
      <ModalSignUp isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Hero
