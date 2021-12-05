import { Avatar, Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import ModalChat from './ModalChat'

const ChatParticipant = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // TODO: 1. PULL THROUGH ACTUAL NAME AND IMAGE OF OTHER PARTY
  // TODO: 2. PASS ALL DATA TO CHATPARTICIPANT MODAL
  // TODO: 3. ADD ON-HOVER ENLARGEMENT OR OTHER FEATURE TO BOX TO DRAW ATTENTION TO CLICK 

  const name: string = props.name
  const imageUrl: string = props.imageUrl


  return (
    <Box>
      <Avatar
        bg="grey"
        onClick={onOpen}
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
      <ModalChat isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default ChatParticipant
