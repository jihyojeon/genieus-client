//@ts-ignore
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Heading,
  Avatar,
  Box,
  Center,
  Stack,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'

console.log('MODAL OPENED')
//@ts-ignore

const ModalDecline = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent fontFamily="sans-serif">
          <Center py={6}>
            <Box
              maxW={'320px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}
            >
              <ModalHeader>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  Lindsey James
                </Heading>
              </ModalHeader>

              <ModalBody>
                <Avatar
                  size={'xl'}
                  src={
                    'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                  }
                  alt={'Avatar Alt'}
                  mb={4}
                  pos={'relative'}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                  }}
                />

                <Text
                  textAlign={'center'}
                  color={useColorModeValue('gray.700', 'gray.400')}
                  px={3}
                >
                  Confirm you wish to decline this Help Request
                </Text>
              </ModalBody>
              <ModalFooter>
                <ModalCloseButton>CLOSE</ModalCloseButton>
                <Stack
                  align={'center'}
                  justify={'center'}
                  direction={'row'}
                  mt={6}
                >
                  <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                      flex={1}
                      fontSize={'sm'}
                      rounded={'full'}
                      _focus={{
                        bg: 'gray.200',
                      }}
                      // {/* TODO: CLOSE MODAL */}
                      // onClick={console.log('resume chat CLICKED')}
                    >
                      Resume Chat
                    
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
                      {/* 
                      TODO: CONDITIONAL TEXT TUTOR/STUDENT
                      STUDENT: [YES] RETURN TO HELP REQUEST
                      TUTOR: [YES] RETURN TO TUTOR DASHBOARD
                      */}
                      Abandon
                    </Button>
                  </Stack>
                </Stack>
              </ModalFooter>
            </Box>
          </Center>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default ModalDecline
