import react from 'react'
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useDisclosure,
  Image,
} from '@chakra-ui/react'

import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import ModalLogIn from './ModalLoginIn'
import Logo from '../../assets/icons/logo.svg'

// const dark = '#121212'
// const light = 'gray.100'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box px={6} py={2} h="10vh">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image src={Logo} boxSize="9rem" pt={5} pl={7} borderRadius="50px" />
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button variant="outline" onClick={onOpen}>
                Log In
              </Button>
              {/* <Button variant='primary'> Sign Up </Button> */}
              <ColorModeSwitcher />
            </Stack>
          </Flex>
        </Flex>
        <ModalLogIn isOpen={isOpen} onClose={onClose} />
      </Box>
    </>
  )
}
