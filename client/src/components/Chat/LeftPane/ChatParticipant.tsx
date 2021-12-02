import { Avatar, Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import ModalChat from './ModalChat'

const ChatParticipant = (props: any) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const name: string = props.name
  const imageUrl: string = props.imageUrl

  return (
    <Box
      bg="grey"
      borderTopRightRadius="1rem"
      borderBottomRightRadius="1rem"
      marginTop={'1rem'}
      padding="1rem"
      // position="absolute"
      // right="0%"
      // top="0%"
    >
      <Avatar
        bg="grey"
        onClick={onOpen}
        padding="0.5rem"
        size={'2xl'}
        src={imageUrl}
        zIndex="10"
      >
      </Avatar>
      <Heading
        fontFamily="montserrat"
        letterSpacing={1}
        fontSize={25}
        fontWeight={400}
      >
        {name}
      </Heading>
      <ModalChat isOpen={isOpen} onClose={onClose} />
    </Box>

  )
}

export default ChatParticipant
