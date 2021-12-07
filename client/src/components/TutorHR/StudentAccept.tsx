import React from 'react'
import {
  Box,
  Text,
  Button,
  Flex,
  Heading,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { useGetStudentByIdQuery } from '../../redux/services/studentService'

const StudentAccept = ({ hrData }: { hrData: any }) => {
  const studentById = useGetStudentByIdQuery(hrData.student_id)

  console.log(studentById.data)
  const navigate = useNavigate()
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      mb={10}
      mr={20}
    >
      <Box
        position="relative"
        ml={'7rem'}
        borderRadius={'20px'}
        p={10}
        bg={useColorModeValue('gray.200', 'gray.700')}
        w={'35vw'}
      >
        <Heading fontFamily="montserrat" fontSize={'18px'} mb={1}>
          {hrData.student.name} is ready{' '}
        </Heading>
        <Text opacity="0.5" mb={2}>
          {studentById.data && studentById.data.email}{' '}
        </Text>
        <Avatar
          position="absolute"
          size={'xl'}
          top={'10'}
          right={20}
          src={hrData.student.photo_url}
        ></Avatar>
        <Button
          onClick={() => {
            navigate(`/chat${hrData.id}`)
          }}
        >
          Go to chat
        </Button>
      </Box>
    </Flex>
  )
}

export default StudentAccept
