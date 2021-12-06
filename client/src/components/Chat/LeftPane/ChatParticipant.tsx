import {
  Avatar,
  Box,
  Heading,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'

type ChatParticipantProps = {
  hr: any
  isTutor: boolean
}

const ChatParticipant = ({ hr, isTutor }: ChatParticipantProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const name: string = isTutor ? hr.student.name : hr.tutor.name
  const photo_url: string = isTutor
    ? hr.student.photo_url
    : hr.tutor.name.photo_url

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
      <Avatar bg="grey" size={'xl'} src={photo_url} zIndex="10"></Avatar>
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
    </Box>
  )
}

export default ChatParticipant
