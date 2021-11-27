import { ReactNode } from 'react'
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

function PriceWrapper({ children }: { children: ReactNode }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.500', 'gray.200')}
            borderRadius={'xl'}
        >
            {children}
        </Box>
    )
}

export default function Pricing() {
    return (
        <Box bg={useColorModeValue('#121212', 'gray.200')} py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl" color="#fff">
                    Subscriptions that fit your need!
                </Heading>
                <Text fontSize="lg" color={'gray.100'}>
                   Your first call is completely free!
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}
            >
                <PriceWrapper>
                    <Box color="#fff" py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Basic
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                10
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /month
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.700', 'gray.50')}
                        py={4}
                        borderBottomRadius={'xl'}
                    >
                        <List
                            color="#fff"
                            spacing={3}
                            textAlign="start"
                            px={12}
                        >
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                unlimited build minutes
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                Lorem, ipsum dolor.
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                5TB Lorem, ipsum dolor.
                            </ListItem>
                        </List>
                        <Box color="#fff" w="80%" pt={7}>
                            <Button
                                w="full"
                                colorScheme="red"
                                variant="outline"
                            >
                                Start trial
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>

                <PriceWrapper>
                    <Box color="#fff" position="relative">
                        <Box
                            color="#fff"
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}
                        >
                            <Text
                                textTransform="uppercase"
                                bg={useColorModeValue('red.700', 'red.300')}
                                px={3}
                                py={1}
                                color={useColorModeValue(
                                    'gray.900',
                                    'gray.300'
                                )}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl"
                            >
                                Most Popular
                            </Text>
                        </Box>
                        <Box color="#fff" py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Pro
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    $
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    20
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /month
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.700', 'gray.50')}
                            py={4}
                            borderBottomRadius={'xl'}
                        >
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="green.500"
                                    />
                                    unlimited build minutes
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="green.500"
                                    />
                                    Lorem, ipsum dolor.
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="green.500"
                                    />
                                    5TB Lorem, ipsum dolor.
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="green.500"
                                    />
                                    5TB Lorem, ipsum dolor.
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="green.500"
                                    />
                                    5TB Lorem, ipsum dolor.
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="red">
                                    Start trial
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box color="#fff" py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Max
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                30
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /month
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.700', 'gray.50')}
                        py={4}
                        borderBottomRadius={'xl'}
                    >
                        <List
                            color="#fff"
                            spacing={3}
                            textAlign="start"
                            px={12}
                        >
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                unlimited build minutes
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                Lorem, ipsum dolor.
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                5TB Lorem, ipsum dolor.
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button
                                w="full"
                                colorScheme="red"
                                variant="outline"
                            >
                                Start trial
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box>
    )
}
