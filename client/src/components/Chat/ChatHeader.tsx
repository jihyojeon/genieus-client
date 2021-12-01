import { ReactNode } from 'react'
import { Box, Flex, Heading, Image, useDisclosure } from '@chakra-ui/react'
import Logo from '../../assets/icons/logo.svg'

export default function ChatHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // THIS COMPONENT IS REDUNDANT.
  // IF REINSTATING, 1) UNCOMMENT IN CHAT.TSX AND 2) ALTER RIGHTPANE ROWSPAN FROM 2 TO 1

  return (
    <Flex h={16} align={'center'} justify={'center'}>
      <Heading
        fontFamily="montserrat"
        fontSize={25}
        fontWeight={400}
        letterSpacing={1}
      >
        Chat commenced at ...
      </Heading>
    </Flex>
  )
}
