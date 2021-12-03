import { Avatar, Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import ModalChat from './ModalChat'

const ChatParticipant = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const name: string = props.name
  const imageUrl: string = props.imageUrl

  return (
    <Flex
      align={'center'}
      direction="column"
      height="100%"
      justify={'center'}
      width="100%"
    >
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
    </Flex>
  )
}

export default ChatParticipant
