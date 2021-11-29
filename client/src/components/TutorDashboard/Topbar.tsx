// import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'

import { ColorModeSwitcher } from '../../ColorModeSwitcher'

const dark = '#121212'
const light = 'gray.100'

export default function Topbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue(dark, light)} px={6} py={2} h="10vh">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box color="white">Logo</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={onOpen} variant="primary">
                Log In
              </Button>
              {/* <Button variant='primary'> Sign Up </Button> */}
              <ColorModeSwitcher />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
