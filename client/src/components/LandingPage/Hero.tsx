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
    useDisclosure,
} from '@chakra-ui/react'
import Lottie from 'lottie-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import ModalSignUp from './ModalSignUp'

const dark = '#121212'
const light = 'gray.100'

const jsIcon: any = require('../../assets/icons/javascript-1.svg')
const codingLotie: any = require('../../assets/lottie/coder/data.json')

const Hero = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box bg={useColorModeValue(dark, light)}>
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
                                color="#fff"
                                mb={7}
                                mt={5}
                                fontWeight={300}
                                fontFamily="chivo"
                            >
                                Find one-on-one tutoring instantly
                            </Heading>
                            <Heading
                                as="h4"
                                size="lg"
                                color="#2153F1"
                                fontWeight={300}
                                fontFamily="chivo"
                            >
                                fix any coding issue with our experts!
                            </Heading>
                            <Flex
                                flexdirection="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                mt={10}
                            >
                                <Button
                                    onClick={onOpen}
                                    mr="7"
                                    variant="secondary"
                                >
                                    Sign Up
                                </Button>
                                <Button variant="secondary">Learn more</Button>
                            </Flex>
                            <Text
                                onClick={onOpen}
                                _hover={{
                                    color: 'teal.600',
                                    cursor: 'pointer',
                                }}
                                letterSpacing={1}
                                width="10rem"

                                color="#fff"
                                fontWeight={400}
                                fontFamily="chivo"
                                mt={9}
                                opacity={0.7}
                            >
                                Sign up as tutor...
                            </Text>
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
                            <Lottie
                                animationData={codingLotie}
                                style={{ height: '80vh' }}
                            />
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
            >
                <Text
                    color="#fff"
                    opacity="0.5"
                    letterSpacing={1.5}
                    _hover={{ opacity: 0.8, cursor: 'pointer' }}
                    align="center"
                >
                    {' '}
                    Find out more... <FontAwesomeIcon icon={faArrowDown} />
                </Text>
            </Box>
            <ModalSignUp isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}

export default Hero
