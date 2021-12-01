import { ReactNode } from 'react'
import { Box, Flex, Heading, Image, Text, useDisclosure } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import Logo from '../../assets/icons/logo.svg'

export default function ChatTopBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    
    <Flex alignItems={'flex-start'} justifyContent={"space-between"} >
      <Image
        boxSize="9rem"
        position="relative"
        src={Logo}
        top="-40px"
        zIndex={10}
        />
      <Flex direction="column" align="center">
        <Heading
          as="h2"
          color="indigo.300"
          colorScheme="indigo"
          fontFamily="montserrat"
          fontWeight={400}
          >
          Pre-meeting Chat
        </Heading>
        <Text>
          Agree here any details before proceeding to your Zoom call
        </Text>
      </Flex>
      <Box>
        <ColorModeSwitcher position="absolute" right={'3'} />
      </Box>
    </Flex>
  )
}
