import React from 'react'
import {
  Box,
  Text,
  Button,
  Flex,
  Heading,
  Image,
  Avatar,
  AvatarBadge,
  useColorModeValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'

const StudentAccept = ({ hrData }: { hrData: any }) => {
  console.log(hrData)
  const navigate = useNavigate()
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      mb={20}
    >
      <Box
        position="relative"
        ml={'7rem'}
        borderRadius={'20px'}
        p={10}
        bg={useColorModeValue('gray.200', 'gray.700')}
        w={'35vw'}
      >
        <Heading fontFamily="montserrat" fontSize={'18px'} mb={5}>
          {hrData.student.name} is ready{' '}
        </Heading>
        <Avatar
          position="absolute"
          size={'xl'}
          top={'10'}
          right={20}
          src={hrData.student.photo_url}
        ></Avatar>
        <Button
          onClick={() => {
            navigate('/chat', { state: hrData })
          }}
        >
          Go to chat
        </Button>
      </Box>
    </Flex>
  )
}

export default StudentAccept
