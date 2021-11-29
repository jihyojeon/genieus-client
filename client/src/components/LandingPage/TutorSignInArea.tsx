import React from 'react'
import { Box, Text, useDisclosure } from '@chakra-ui/react'
import ModalTutorSignUp from './ModalTutorSignUp'

const TutorSignInArea = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Text
        onClick={onOpen}
        _hover={{
          color: 'purple.300',
          cursor: 'pointer',
        }}
        letterSpacing={1}
        width="10rem"
        fontWeight={400}
        mt={9}
        opacity={0.7}
      >
        Sign up as tutor...
      </Text>
      <ModalTutorSignUp isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default TutorSignInArea
