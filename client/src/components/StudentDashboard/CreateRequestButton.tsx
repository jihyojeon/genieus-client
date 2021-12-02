import React from 'react'
import { Button, Flex, useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'

const buttonColorPurple = '#A78BFA'

// TODO: NOT SURE THIS IS THE TEXTBOOK IMPLEMENTATION OF REACT ROUTING
const CreateRequestButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navigate = useNavigate()

  const handleClick = () => {
    console.log('Create request clicked - not yet implemented')
    navigate('/student-hr')
  }

  return (
    <Flex justify={'flex-start'} align={'center'} height={'100%'}>
      <Button
        borderRadius={'10px'}
        // TODO: CREATE LIGHTER, STRONGER, SHADOW UNDER BUTTON
        variant="outline"
        boxShadow="dark-lg"
        fontSize="3xl"
        fontWeight={300}
        ml={8}
        height={'70%'}
        onClick={handleClick}
        width={'20rem'}
      >
        Create Request
      </Button>
    </Flex>
  )
}

export default CreateRequestButton
