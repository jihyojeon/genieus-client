import React from 'react'
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  useColorModeValue,
  Text,
  Link,
  useDisclosure,
} from '@chakra-ui/react'
import Lottie from 'lottie-react'

// Modals
import ModalSignUp from './ModalSignUp'
import TutorSignInArea from './TutorSignInArea'

// const dark = '#121212'
// const light = 'gray.200'

const jsIcon: any = require('../../assets/icons/javascript-1.svg')
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
                      top: 800,
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

        <GridItem position="relative">
          <Box>
            <Flex
              h="80vh"
              maxH="400px"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Box>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                  boxSize="60px"
                  position="absolute"
                  top="30"
                  right="100"
                  borderRadius="50px"
                />

                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
                  boxSize="60px"
                  position="absolute"
                  top="180"
                  right="90"
                  borderRadius="full"
                />

                <Image
                  src="https://cdn.worldvectorlogo.com/logos/java.svg"
                  boxSize="60px"
                  position="absolute"
                  top="20"
                  right="460"
                  borderRadius="50px"
                />

                <Image
                  src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
                  boxSize="60px"
                  position="absolute"
                  top="450"
                  right="500"
                  borderRadius="50px"
                />

                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
                  boxSize="60px"
                  position="absolute"
                  top="490"
                  right="150"
                  borderRadius="full"
                />

                <Image
                  src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                  boxSize="60px"
                  position="absolute"
                  top="240"
                  right="525"
                  borderRadius="20px"
                />
              </Box>
              <Lottie animationData={codingLottie} style={{ height: '80vh' }} />
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
      <ModalSignUp isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Hero
