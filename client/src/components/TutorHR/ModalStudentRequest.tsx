import {
  Avatar,
  Badge,
  Box,
  Center,
  Flex,
  Heading,
  Modal,
  ModalContent,
  ModalFooter,
  ModalBody,
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
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex justify="center">
            <Heading fontSize={'2xl'}>{hrData.student.name}</Heading>
          </Flex>
        </ModalHeader>
        <ModalBody></ModalBody>

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
            src={getStudent?.data?.photo_url}
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

          <Heading fontSize={'xl'} fontFamily={'body'} mt="1rem">
            {getStudent.isSuccess && getStudent?.data?.location ? (
              <Text>Location</Text>
            ) : null}
          </Heading>
          <Text fontSize={'lg'}>
            {getStudent.isSuccess && getStudent?.data?.location}
          </Text>
          <Heading fontSize={'lg'} fontFamily={'body'} mt="1rem">
            {getStudent.isSuccess && getStudent?.data?.bio ? (
              <Text>Bio</Text>
            ) : null}
          </Heading>
          <Text fontSize={'lg'}>
            {getStudent.isSuccess && getStudent?.data?.bio}
          </Text>
        </Box>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalStudentRequest
