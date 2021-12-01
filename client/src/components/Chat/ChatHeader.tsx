import { ReactNode } from 'react'
import { Box, Flex, Heading, Image, useDisclosure } from '@chakra-ui/react'
import Logo from '../../assets/icons/logo.svg'

export default function ChatHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex h={16} align={'center'} justify={'center'}>
      <Heading
        fontFamily="montserrat"
        letterSpacing={1}
        fontSize={25}
        fontWeight={400}
      >
        Chat Header
      </Heading>
    </Flex>
  )
}
