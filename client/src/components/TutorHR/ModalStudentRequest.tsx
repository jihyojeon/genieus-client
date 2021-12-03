import {
  Avatar,
  Badge,
  Box,
  Center,
  Heading,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Button,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useGetStudentByIdQuery } from '../../redux/services/studentService'

//@ts-ignore
const ModalStudentRequest = ({ isOpen, onClose, hrData }) => {
  const getStudent = useGetStudentByIdQuery(hrData.student_id)
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent fontFamily="sans-serif">
          <ModalHeader m={0} fontWeight="400" align="center" fontSize="30px">
            <Center py={6}>
              <Box
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                maxW={'480px'}
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
                  {hrData.student.name}
                </Heading>
                <Text
                  textAlign={'center'}
                  fontSize="1.3rem"
                  color={useColorModeValue('gray.700', 'gray.400')}
                  px={3}
                >
                  {getStudent.isSuccess && getStudent?.data?.email}
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} mt="1rem">
                  Bio
                </Heading>
                <Text fontSize={'20px'}>
                  {getStudent.isSuccess && getStudent?.data?.bio}
                </Text>

                <Stack
                  align={'center'}
                  justify={'center'}
                  direction={'row'}
                  mt={6}
                >
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
              </Box>
            </Center>
          </ModalHeader>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default ModalStudentRequest
