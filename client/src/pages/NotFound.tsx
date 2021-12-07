import React from 'react'
import { Box, Flex, Heading, Image, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import notFoundImage from '../assets/notFoundImage.svg'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        color="indigo.400"
        my={5}
        letterSpacing={1}
        fontFamily="montserrat"
      >
        I think you're lost...
      </Heading>
      <Heading
        mb={10}
        color="indigo.200"
        fontFamily="montserrat"
        fontSize={'20px'}
      >
        Lets take you home
      </Heading>
      <Button
        mb={10}
        onClick={() => {
          navigate('/')
        }}
        variant="outline"
        color="indigo.200"
      >
        Home Page
      </Button>

      <Image src={notFoundImage} h={'20rem'} w={'20rem'} />
    </Flex>
  )
}

export default NotFound
