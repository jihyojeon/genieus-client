import {
  Avatar,
  Box,
  Flex,
  Heading,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import ModalBio from './ModalBio'

const ChatParticipant = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // TODO: 1. PULL THROUGH ACTUAL NAME AND IMAGE OF OTHER PARTY
  // TODO: 3. ADD ON-HOVER ENLARGEMENT OR OTHER FEATURE TO BOX TO DRAW ATTENTION TO CLICK
  // TODO: 2. PASS ALL DATA TO CHATBIO MODAL

  const name: string = props.name
  const imageUrl: string = props.imageUrl

  return (
    <Box
      alignItems="center"
      bg={useColorModeValue('gray.100', 'gray.700')}
      borderRadius="1rem"
      direction="column"
      onClick={onOpen}
      padding="1rem"
      marginTop={'1rem'}
      height="100%"
      width="100%"
      justifyContent="space-between"
    >
      <Avatar
        bg="grey"
        size={'xl'}
        src={imageUrl}
        zIndex="10"
      ></Avatar>
      <Heading
        fontFamily="montserrat"
        fontSize={25}
        fontWeight={400}
        height="100%"
        letterSpacing={1}
        mt="0.5rem"
      >
        {name}
      </Heading>
      <ModalBio
        isOpen={isOpen}
        onClose={onClose}
        // TODO: ADD BIO DATA
      />
    </Box>
  )
}

export default ChatParticipant
