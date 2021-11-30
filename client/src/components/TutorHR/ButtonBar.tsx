import React from 'react'
import { Flex, Button, useDisclosure } from '@chakra-ui/react'
import ModalStudentRequest from './ModalStudentRequest'

  const ButtonBar = ({
    setloadingBtn,
    setStudentReady,
  }: any) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

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
