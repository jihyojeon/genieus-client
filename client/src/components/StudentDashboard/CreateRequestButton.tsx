import {
  Button,
  Flex,
  useDisclosure,
  useColorModeValue,
  Text,
  HStack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'

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
        _hover={{
          bgGradient: useColorModeValue(
            'linear(to-r, blue.500, teal.300)',
            'linear(to-r, blue.300, teal.100)'
          ),
          color: useColorModeValue('white', 'black'),
        }}
        borderRadius={'10px'}
        variant="outline"
        boxShadow="base"
        fontSize="3xl"
        fontWeight={500}
        ml={8}
        height={'100%'}
        onClick={handleClick}
        width={'20rem'}
      >
        <HStack>
          <BiEdit />
          <Text>Create Request</Text>
        </HStack>
      </Button>
    </Flex>
  )
}

export default CreateRequestButton
