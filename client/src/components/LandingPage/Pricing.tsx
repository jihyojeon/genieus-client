import { ReactNode, useState } from 'react'
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
  useDisclosure,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import ModalSignUp from './ModalSignUp'
import { useGetSubscriptionsQuery } from '../../redux/services/subscriptionService'

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
  const [basicClicked, setbasicClicked] = useState(false)
  const [proClicked, setproClicked] = useState(false)
  const [maxClicked, setmaxClicked] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const getSubscriptions = useGetSubscriptionsQuery()

  return (
    <Box pb={15}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Subscriptions that fit your need!
        </Heading>
        <Text fontSize="lg">Your first call is completely free!</Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box maxWidth="20rem">
            <Box
              color={useColorModeValue('gray.500', 'gray.100')}
              py={4}
              px={12}
            >
              <Text fontWeight="500" fontSize="2xl">
                Basic
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  £
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
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  45 minutes of help requests a month.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Roll-over of 20 minutes to following month.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Flexible plan
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button
                  onClick={() => {
                    onOpen()
                    setbasicClicked(true)
                  }}
                  w="full"
                  colorScheme="indigo"
                  variant="outline"
                >
                  Start trial
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative" maxWidth="20rem">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('indigo.300', 'indigo.400')}
                px={3}
                py={1}
                color={useColorModeValue('gray.300', 'gray.900')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Most Popular
              </Text>
            </Box>
            <Box
              color={useColorModeValue('gray.500', 'gray.100')}
              py={4}
              px={12}
            >
              <Text fontWeight="500" fontSize="2xl">
                Pro
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  £
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
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  120 minutes of help request a month.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Roll-over of 25 minutes to following month.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Access to "Favourite Tutor" functions.
                </ListItem>
              </List>

              <Box w="80%" pt={7}>
                <Button
                  onClick={() => {
                    onOpen()
                    setproClicked(true)
                  }}
                  w="full"
                  colorScheme="indigo"
                >
                  Start trial
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box maxWidth="20rem">
            <Box
              color={useColorModeValue('gray.500', 'gray.100')}
              py={4}
              px={12}
            >
              <Text fontWeight="500" fontSize="2xl">
                Max
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  £
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
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  200 minutes of help request a month.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Access to "Favourite Tutor" functions.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Priority tutor service.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button
                  onClick={() => {
                    onOpen()
                    setmaxClicked(true)
                  }}
                  w="full"
                  colorScheme="indigo"
                  variant="outline"
                >
                  Start trial
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
      </Stack>
      <ModalSignUp
        maxClicked={maxClicked}
        basicClicked={basicClicked}
        proClicked={proClicked}
        isOpen={isOpen}
        onClose={onClose}
        setbasicClicked={setbasicClicked}
        setproClicked={setproClicked}
        setmaxClicked={setmaxClicked}
      />
    </Box>
  )
}
