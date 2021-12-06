import React from 'react'
import { Box, Text, Button, Flex, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router'

const StudentAccept = ({ hrData }: { hrData: any }) => {
  const navigate = useNavigate()
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt={2}
      mb={20}
      pb={30}
    >
      <Heading mb={5}>{hrData.student.name} is ready </Heading>
      <Button
        onClick={() => {
          navigate('/chat', { state: hrData })
        }}
      >
        Go to chat
      </Button>
    </Flex>
  )
}

export default StudentAccept
