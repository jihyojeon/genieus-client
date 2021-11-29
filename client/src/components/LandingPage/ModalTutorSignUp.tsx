import React, { useState } from 'react'
import ModalLoginIn from './ModalLoginIn'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { signInWithGoogle } from '../../firebase'
import { FcGoogle } from 'react-icons/fc'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Flex,
  Text,
  Image,
  FormControl,
  InputGroup,
  FormLabel,
  Input,
  Box,
  InputRightElement,
  HStack,
  Checkbox,
  Center,
  FormHelperText,
} from '@chakra-ui/react'

import { FaGoogle } from 'react-icons/fa'
import Logo from '../../assets/icons/logo.svg'

//@ts-ignore
const ModalTutorSignUp = ({ isOpen, onClose }) => {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const signup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log(`${user} Signed up!`)
    } catch (error) {
      //@ts-ignore
      console.log(error)
    }
  }

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent fontFamily="chivo">
        <ModalHeader m={0} fontWeight="400" align="center" fontSize="30px">
          Tutor Sign Up
          <Image
            src={Logo}
            position="absolute"
            top={1}
            boxSize="4.5rem"
            borderRadius="50px"
          />
        </ModalHeader>

        <ModalBody>
          <Flex justifyContent="center" alignItems="center" direction="column">
            <FormControl mb="3" id="first-name" isRequired>
              <FormLabel>Full name</FormLabel>
              <Input variant="filled" />
            </FormControl>
            <FormControl mb="2.5" id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={(e) => setRegisterEmail(e.target.value)}
                type="email"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <HStack>
              <Button
                w={'25rem'}
                mt={4}
                onClick={signInWithGoogle}
                variant={'outline'}
                leftIcon={<FcGoogle />}
              >
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </HStack>
          </Flex>
        </ModalBody>

        <ModalCloseButton />

        <ModalFooter>
          <Button w="100%" onClick={signup}>
            Sign Up
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalTutorSignUp
