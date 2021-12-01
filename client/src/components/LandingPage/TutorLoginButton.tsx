import React from 'react'
import { Box, Button, useDisclosure } from '@chakra-ui/react'
import ModalTutorLogIn from './ModalTutorLogIn'

const TutorLoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Button variant="outline" onClick={onOpen}>
        Log in as Tutor
      </Button>
      <ModalTutorLogIn isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default TutorLoginButton
