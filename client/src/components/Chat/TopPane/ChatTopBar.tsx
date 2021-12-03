import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import Logo from '../../../assets/icons/logo.svg'

export default function ChatTopBar({ seconds }: any) {

  return (
    <Flex
      alignItems={'flex-start'}
      justifyContent={'space-between'}
      height="5rem"
    >
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
          Chat
        </Heading>
        <Text></Text>
      </Flex>

      <Box>
        <ColorModeSwitcher position="absolute" right={'3'} />
      </Box>
    </Flex>
  )
}
