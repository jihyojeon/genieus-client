import React from 'react'
import { Flex, Button, useDisclosure } from '@chakra-ui/react'
import ModalStudentRequest from './ModalStudentRequest'
import { useNavigate } from 'react-router-dom'

const ButtonBar = ({ setloadingBtn, setStudentReady }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navigate = useNavigate()

  const handleClick = () => {
    console.log('Create request clicked - not yet implemented')
    navigate('/chat')
  }

  return (
    <Flex
      alignItems="flex-start"
      flexDirection="row"
      justifyContent="center"
      px="10"
    >
      <Button
        colorScheme="indigo"
        fontFamily="montserrat"
        letterSpacing={2}
        ml={105}
        onClick={onOpen}
        padding={8}
        variant="outline"
      >
        Student
      </Button>
      <Button
        colorScheme="indigo"
        fontFamily="montserrat"
        letterSpacing={2}
        ml={105}
        onClick={handleClick}
        padding={8}
        variant="outline"
      >
        Accept
      </Button>
      <Button
        colorScheme="indigo"
        fontFamily="montserrat"
        letterSpacing={2}
        ml={105}
        padding={8}
        variant="outline"
      >
        Decline
      </Button>
      <ModalStudentRequest isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default ButtonBar
