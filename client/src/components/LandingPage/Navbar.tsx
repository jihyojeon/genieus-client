import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  Divider,
  useColorModeValue,
  Stack,
  useColorMode,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../../ColorModeSwitcher'

const dark = '#121212';
const light = 'gray.100';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue(dark, light)} px={6} py={2} h="10vh">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box color='white'>Logo</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={onOpen} variant='primary'>
                Log In
              </Button>
              <Button variant='primary'> Sign Up </Button>
              <ColorModeSwitcher />
            </Stack>
          </Flex>
        </Flex>
      </Box>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Hey</ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
