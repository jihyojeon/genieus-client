import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Heading,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

//@ts-ignore
  const ModalStudentRequest = ({ isOpen, onClose }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent fontFamily="sans-serif">
            <ModalHeader m={0} fontWeight="400" align="center" fontSize="30px">

              <Center py={6}>
                <Box
                  bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'2xl'}
                  maxW={'320px'}
                  p={6}
                  rounded={'lg'}
                  textAlign={'center'}
                  w={'full'}
                >
                  <Avatar
                    alt={'Avatar Alt'}
                    size={'xl'}
                    src={
                      'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                    }
                    mb={4}
                    pos={'relative'}
                    _after={{
                      bg: 'green.300',
                      bottom: 0,
                      border: '2px solid white',
                      content: '""',
                      h: 4,
                      pos: 'absolute',
                      rounded: 'full',
                      right: 3,
                      w: 4,
                    }}
                  />
                  <Heading fontSize={'2xl'} fontFamily={'body'}>
                    Jihyo  
                  </Heading>
                  <Text fontWeight={600} color={'gray.500'} mb={4}>
                    @jihyo
                  </Text>
                  <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}
                    >
                    Coder, Millwall Fan, Superpower: speaks Korean{' '}
                    <Link href={'#'} color={'blue.400'}>
                      #tag
                    </Link>{' '}
                    me in your posts
                  </Text>

                  <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                      px={2}
                      py={1}
                      bg={useColorModeValue('gray.50', 'gray.800')}
                      fontWeight={'400'}
                      >
                      #ml
                    </Badge>
                    <Badge
                      px={2}
                      py={1}
                      bg={useColorModeValue('gray.50', 'gray.800')}
                      fontWeight={'400'}
                    >
                      #js
                    </Badge>
                    <Badge
                      px={2}
                      py={1}
                      bg={useColorModeValue('gray.50', 'gray.800')}
                      fontWeight={'400'}
                      >
                      #stt
                    </Badge>
                  </Stack>

                  <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                      flex={1}
                      fontSize={'sm'}
                      rounded={'full'}
                      _focus={{
                        bg: 'gray.200',
                      }}
                      >
                      Remove
                    </Button>
                    <Button
                      flex={1}
                      fontSize={'sm'}
                      rounded={'full'}
                      bg={'blue.400'}
                      color={'white'}
                      boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                      }
                      _hover={{
                        bg: 'blue.500',
                      }}
                      _focus={{
                        bg: 'blue.500',
                      }}
                    >
                      Follow
                    </Button>
                  </Stack>
                </Box>
              </Center>
            </ModalHeader>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    )
  }

export default ModalStudentRequest
